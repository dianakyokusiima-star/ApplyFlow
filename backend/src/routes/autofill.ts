import { Hono } from "hono";
import { db } from "../db";
import { resumes } from "../db/schema";
import { eq, and } from "drizzle-orm";
import { authMiddleware } from "../middleware/auth";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import OpenAI from "openai";
import "dotenv/config";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "sk-placeholder",
});

const autofillApp = new Hono();

autofillApp.use("*", authMiddleware);

const fieldMetadataSchema = z.object({
  tag: z.string(),
  type: z.string().optional(),
  name: z.string().optional(),
  id: z.string().optional(),
  label: z.string().optional(),
  context: z.string().optional(),
  options: z.array(z.string()).optional(), // For select/radio
});

const analyzeFormSchema = z.object({
  fields: z.array(fieldMetadataSchema),
  resumeId: z.string().optional(),
});

/**
 * Mock analysis for development when OpenAI API key is missing
 */
function mockAnalyzeForm(fields: any[], resumeData: any) {
  const mappings = fields.map((field) => {
    const fieldId = field.id || field.name || "";
    const label = (field.label || "").toLowerCase();
    const name = (field.name || "").toLowerCase();
    
    let predictedValue = null;
    let reasoning = "No matching data found in resume.";
    let confidence = 0.1;

    // Simple heuristic matching
    if (label.includes("first name") || name.includes("firstname")) {
      predictedValue = resumeData.basics?.firstName || "John";
      reasoning = "Matched based on label/name containing 'first name'.";
      confidence = 0.9;
    } else if (label.includes("last name") || name.includes("lastname")) {
      predictedValue = resumeData.basics?.lastName || "Doe";
      reasoning = "Matched based on label/name containing 'last name'.";
      confidence = 0.9;
    } else if (label.includes("email") || name.includes("email")) {
      predictedValue = resumeData.basics?.email || "john.doe@example.com";
      reasoning = "Matched based on label/name containing 'email'.";
      confidence = 0.95;
    } else if (label.includes("phone") || name.includes("phone") || name.includes("tel")) {
      predictedValue = resumeData.basics?.phone || "+1234567890";
      reasoning = "Matched based on label/name containing 'phone'.";
      confidence = 0.9;
    } else if (label.includes("linkedin") || name.includes("linkedin")) {
      predictedValue = resumeData.basics?.profiles?.find((p: any) => p.network === "LinkedIn")?.url || "https://linkedin.com/in/johndoe";
      reasoning = "Matched based on label/name containing 'linkedin'.";
      confidence = 0.9;
    } else if (label.includes("summary") || label.includes("about") || name.includes("summary")) {
      predictedValue = resumeData.basics?.summary || "Experienced software engineer...";
      reasoning = "Matched based on label/name containing 'summary' or 'about'.";
      confidence = 0.8;
    }

    return {
      fieldId: field.id || field.name || "unknown",
      predictedValue,
      confidence,
      reasoning,
    };
  });

  return { mappings };
}

autofillApp.post("/analyze-form", zValidator("json", analyzeFormSchema), async (c) => {
  const userId = c.get("userId");
  const { fields, resumeId } = c.req.valid("json");

  // Fetch the resume
  let userResume;
  if (resumeId) {
    userResume = await db.query.resumes.findFirst({
      where: and(eq(resumes.id, resumeId), eq(resumes.userId, userId)),
    });
  } else {
    // Default to the first resume if no resumeId or active resume is specified
    userResume = await db.query.resumes.findFirst({
      where: eq(resumes.userId, userId),
      orderBy: (resumes, { desc }) => [desc(resumes.updatedAt)],
    });
  }

  if (!userResume) {
    return c.json({ error: "No resume found for analysis" }, 404);
  }

  const resumeData = userResume.data;

  // Use mock if API key is missing
  if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === "sk-...") {
    console.warn("OpenAI API key missing or placeholder. Using mock analysis.");
    const analysis = mockAnalyzeForm(fields, resumeData);
    return c.json(analysis);
  }

  try {
    const prompt = `
      You are an AI assistant that helps job seekers fill out application forms.
      Below is the structured data from a user's resume and a list of form fields from a job application.
      
      User Resume Data:
      ${JSON.stringify(resumeData, null, 2)}
      
      Form Fields to Analyze:
      ${JSON.stringify(fields, null, 2)}
      
      For each form field, determine:
      1. Predicted Value: The most appropriate value from the resume to fill this field.
      2. Confidence Score: A number between 0 and 1 indicating how certain you are.
      3. Reasoning: A brief explanation of why you chose this value or mapping.
      
      If a field asks for something not in the resume, leave the predicted value null and explain why in the reasoning.
      If it's a multiple choice field (select/radio), choose the best matching option from the provided 'options' list.
      
      Return the result as a JSON object with a key "mappings" containing an array of objects, one for each field in the same order as provided:
      {
        "mappings": [
          {
            "fieldId": "id or name of the field",
            "predictedValue": "string or null",
            "confidence": number,
            "reasoning": "string"
          }
        ]
      }
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant that maps resume data to form fields." },
        { role: "user", content: prompt },
      ],
      response_format: { type: "json_object" },
    });

    const content = response.choices[0].message.content;
    if (!content) {
      throw new Error("Empty response from OpenAI");
    }

    const analysis = JSON.parse(content);
    // The model might return { "analysis": [...] } or just the array if we are lucky, 
    // but with json_object it usually needs a root key or we specify it in prompt.
    // Let's assume it follows the instructions or wrap it if needed.
    
    return c.json(analysis);
  } catch (error: any) {
    console.error("Error during AI analysis:", error);
    return c.json({ error: "Failed to analyze form fields", details: error.message }, 500);
  }
});

export default autofillApp;
