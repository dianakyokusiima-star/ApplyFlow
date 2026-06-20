import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import "dotenv/config";
import resumeRoutes from "./routes/resumes";
import autofillRoutes from "./routes/autofill";

const app = new Hono();

app.use("*", logger());
app.use("*", cors());

app.get("/health", (c) => {
  return c.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.route("/api/v1/resumes", resumeRoutes);
app.route("/api/v1/autofill", autofillRoutes);

const port = 3000;
console.log(`Server is running on http://0.0.0.0:${port}`);

serve({
  fetch: app.fetch,
  port,
});
