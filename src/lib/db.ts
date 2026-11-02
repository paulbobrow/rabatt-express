import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@/db/schema";

/**
 * Optional live Postgres. Until DATABASE_URL is set, the app serves seed content.
 */
export function getDb() {
  const url = process.env.DATABASE_URL?.trim();
  if (!url) return null;
  const client = postgres(url, { prepare: false, max: 1 });
  return drizzle(client, { schema });
}
