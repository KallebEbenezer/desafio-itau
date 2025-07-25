import { drizzle, MySql2Database } from "drizzle-orm/mysql2";
import mysql from "mysql2";
import * as schema from "./schema"; 
import "dotenv/config";

const pool = mysql.createPool({
  uri: process.env.DB_URL as string
})

export const db: MySql2Database<typeof schema> = drizzle(pool, { schema, mode: "default" });