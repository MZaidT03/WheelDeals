import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http"; // Use Neon-specific driver
import * as schema from "./schema";

// Initialize the Neon connection
const sql = neon(import.meta.env.VITE_DRIZZLE_DATABASE_URL);

// Initialize Drizzle with the Neon connection
export const db = drizzle(sql);
