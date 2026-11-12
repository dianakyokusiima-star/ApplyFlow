import { createFileRoute } from "@tanstack/react-router";
import { runMigrations } from "~/db/init";
import { seedCoaches } from "~/db/seed";

export const Route = createFileRoute("/api/init-db")({
  server: {
    handlers: {
      POST: async () => {
        try {
          await runMigrations();
          await seedCoaches();
          return Response.json({ ok: true, message: "Database initialized and coaches seeded." });
        } catch (error) {
          console.error("Database initialization failed", error);
          return Response.json({ ok: false, error: "Database initialization failed." }, { status: 500 });
        }
      },
      GET: async () => new Response("Use POST to initialize the database.", { status: 405, headers: { Allow: "POST" } }),
    },
  },
});
