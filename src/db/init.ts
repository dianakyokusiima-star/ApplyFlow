import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { sql } from "~/db";

/** Apply the idempotent database schema. */
export async function runMigrations(): Promise<void> {
  // The bundled server does not preserve this SQL asset beside the module;
  // publish runs from the project root, where the source migration is stable.
  const schemaPath = [
    `${process.cwd()}/src/db/schema.sql`,
    "/home/team/shared/site/src/db/schema.sql",
  ].find((candidate) => candidate);
  const schema = await readFile(schemaPath!, "utf8");
  // Neon HTTP prepared statements accept one command at a time.
  for (const statement of schema.split(";").map((part) => part.trim()).filter(Boolean)) {
    await sql().query(statement);
  }
}
