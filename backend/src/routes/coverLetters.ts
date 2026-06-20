import { Hono } from "hono";
import { db } from "../db";
import { resumes, coverLetters } from "../db/schema";
import { eq, and } from "drizzle-orm";
import { authMiddleware } from "../middleware/auth";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import OpenAI from "openai";
import "dotenv/config";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "sk-placeholder",
});

const coverLettersApp = new Hono();

coverLettersApp.use("*", authMiddleware);

const generateCoverLetterSchema = z.object({
  resumeId: z.string(),
  jobDescriptionText: z.string(),
  companyName: z.string().optional(),
  jobTitle: z.string().optional(),
});

/**
 * Mock cover letter generation for development when OpenAI API key is missing
 */
function mockGenerateCoverLetter(resumeData: any, jobDescription: string, companyName?: string, jobTitle?: string) {
  const name = resumeData.basics?.name || "Job Seeker";
  const email = resumeData.basics?.email || "seeker@example.com";
  const phone = resumeData.basics?.phone || "(555) 000-0000";
  
  const targetCompany = companyName || "Hiring Manager";
  const targetRole = jobTitle || "Position";

  const content = `
# Cover Letter

**${name}**
${email} | ${phone}

Dear Hiring Manager at ${targetCompany},

I am writing to express my enthusiastic interest in the ${targetRole} position at ${targetCompany}, as advertised. With my background in software development and my passion for building innovative solutions, I am confident that I am a strong candidate for this role.

In my previous experience, I have developed a strong foundation in technologies like React, Node.js, and TypeScript. I have a proven track record of delivering high-quality code and collaborating effectively with cross-functional teams.

I am particularly drawn to ${targetCompany} because of your commitment to excellence and innovation. I am eager to bring my skills to your team and contribute to your ongoing success.

Thank you for your time and consideration. I look forward to the possibility of discussing my qualifications with you in more detail.

Sincerely,

${name}
  `;

  return {
    content,
    jobTitle: targetRole,
    companyName: targetCompany,
  };
}

coverLettersApp.post("/generate", zValidator("json", generateCoverLetterSchema), async (c) => {
  const userId = c.get("userId");
  const { resumeId, jobDescriptionText, companyName, jobTitle } = c.req.valid("json");

  // Fetch the resume
  const userResume = await db.query.resumes.findFirst({
    where: and(eq(resumes.id, resumeId), eq(resumes.userId, userId)),
  });

  if (!userResume) {
    return c.json({ error: "Resume not found" }, 404);
  }

  const resumeData = userResume.data;

  // Use mock if API key is missing
  if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === "sk-placeholder" || process.env.OPENAI_API_KEY.startsWith("sk-...")) {
    console.warn("OpenAI API key missing or placeholder. Using mock cover letter generation.");
    const result = mockGenerateCoverLetter(resumeData, jobDescriptionText, companyName, jobTitle);
    
    const coverLetterId = crypto.randomUUID();
    await db.insert(coverLetters).values({
      id: coverLetterId,
      userId,
      resumeId,
      content: result.content,
      jobTitle: result.jobTitle,
      companyName: result.companyName,
      tokensUsed: 0,
    });

    return c.json({
      id: coverLetterId,
      ...result
    });
  }

  try {
    const prompt = `
      You are an expert career coach and professional writer. 
      Generate a tailored, professional, and compelling cover letter for a job application.
      
      User Resume Data:
      ${JSON.stringify(resumeData, null, 2)}
      
      Job Description:
      ${jobDescriptionText}
      
      ${companyName ? `Company Name: ${companyName}` : ""}
      ${jobTitle ? `Job Title: ${jobTitle}` : ""}
      
      Instructions:
      1. Use the information from the resume to highlight the most relevant experiences and skills for this specific job.
      2. The tone should be professional, confident, and enthusiastic.
      3. The cover letter should follow a standard professional format (Introduction, Body Paragraphs, Conclusion).
      4. If Company Name or Job Title are provided, use them correctly.
      5. Return the response as a JSON object with:
         - "content": The full cover letter in Markdown format.
         - "jobTitle": The extracted or provided job title.
         - "companyName": The extracted or provided company name.
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a professional cover letter generator." },
        { role: "user", content: prompt },
      ],
      response_format: { type: "json_object" },
    });

    const content = response.choices[0].message.content;
    if (!content) throw new Error("Empty response from OpenAI");
    
    const result = JSON.parse(content);
    
    // Save to database
    const coverLetterId = crypto.randomUUID();
    await db.insert(coverLetters).values({
      id: coverLetterId,
      userId,
      resumeId,
      content: result.content,
      jobTitle: result.jobTitle || jobTitle,
      companyName: result.companyName || companyName,
      tokensUsed: response.usage?.total_tokens || 0,
    });

    return c.json({
      id: coverLetterId,
      ...result
    });

  } catch (error: any) {
    console.error("Error generating cover letter:", error);
    return c.json({ error: "Failed to generate cover letter", details: error.message }, 500);
  }
});

export default coverLettersApp;
