import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "./schema/index.js";
const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

const connectionString = (process.env.DATABASE_URL ?? "").split("?")[0];

export const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
});
export const db = drizzle(pool, { schema });

export * from "./schema/index.js";
// Re-export drizzle-orm query helpers so consumers (e.g. api-server) use
// the exact same resolved drizzle-orm instance as this package, avoiding
// "separate declarations of a private property" type errors caused by
// pnpm installing two structurally-identical-but-distinct copies.
export { eq, and, or, not, count, sql, desc, asc, gte, lte, gt, lt, inArray, like, isNull, isNotNull } from "drizzle-orm";
