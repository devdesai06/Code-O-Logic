import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

// Minimal DB connection - robust against missing env var for frontend-only usage
export const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL || "postgres://postgres:postgres@localhost:5432/postgres" 
});
export const db = drizzle(pool, { schema });
