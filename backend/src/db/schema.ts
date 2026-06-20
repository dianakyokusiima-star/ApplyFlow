import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull(),
  name: text("name"),
  avatarUrl: text("avatar_url"),
  subscriptionTier: text("subscription_tier").default("free"),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").default(sql`CURRENT_TIMESTAMP`),
});

export const resumes = sqliteTable("resumes", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => users.id),
  title: text("title").notNull(),
  targetRole: text("target_role"),
  data: text("data", { mode: "json" }).notNull(),
  templateId: text("template_id").notNull(),
  thumbnailUrl: text("thumbnail_url"),
  pdfUrl: text("pdf_url"),
  isActive: integer("is_active", { mode: "boolean" }).default(false),
  version: integer("version").default(1),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").default(sql`CURRENT_TIMESTAMP`),
});

export const coverLetters = sqliteTable("cover_letters", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => users.id),
  resumeId: text("resume_id").references(() => resumes.id),
  content: text("content").notNull(),
  jobTitle: text("job_title"),
  companyName: text("company_name"),
  jobDescriptionHash: text("job_description_hash"),
  tokensUsed: integer("tokens_used"),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});
