import { Hono } from "hono";
import { db } from "../db";
import { resumes } from "../db/schema";
import { eq, and } from "drizzle-orm";
import { authMiddleware } from "../middleware/auth";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

const resumesApp = new Hono();

resumesApp.use("*", authMiddleware);

const resumeSchema = z.object({
  title: z.string(),
  targetRole: z.string().optional(),
  data: z.any(),
  templateId: z.string(),
  isActive: z.boolean().optional(),
});

// GET /api/v1/resumes
resumesApp.get("/", async (c) => {
  const userId = c.get("userId");
  const userResumes = await db.query.resumes.findMany({
    where: eq(resumes.userId, userId),
  });
  return c.json(userResumes);
});

// POST /api/v1/resumes
resumesApp.post("/", zValidator("json", resumeSchema), async (c) => {
  const userId = c.get("userId");
  const body = c.req.valid("json");

  const id = crypto.randomUUID();
  const newResume = {
    id,
    userId,
    ...body,
  };

  await db.insert(resumes).values(newResume);
  return c.json(newResume, 201);
});

// GET /api/v1/resumes/:id
resumesApp.get("/:id", async (c) => {
  const userId = c.get("userId");
  const id = c.req.param("id");

  const resume = await db.query.resumes.findFirst({
    where: and(eq(resumes.id, id), eq(resumes.userId, userId)),
  });

  if (!resume) {
    return c.json({ error: "Resume not found" }, 404);
  }

  return c.json(resume);
});

// PUT /api/v1/resumes/:id
resumesApp.put("/:id", zValidator("json", resumeSchema.partial()), async (c) => {
  const userId = c.get("userId");
  const id = c.req.param("id");
  const body = c.req.valid("json");

  const result = await db
    .update(resumes)
    .set({ ...body, updatedAt: new Date().toISOString() })
    .where(and(eq(resumes.id, id), eq(resumes.userId, userId)));

  return c.json({ success: true });
});

// DELETE /api/v1/resumes/:id
resumesApp.delete("/:id", async (c) => {
  const userId = c.get("userId");
  const id = c.req.param("id");

  await db.delete(resumes).where(and(eq(resumes.id, id), eq(resumes.userId, userId)));

  return c.json({ success: true });
});

export default resumesApp;
