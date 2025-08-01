import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: './src/drizzle/migrations',
  schema: "./src/infra/db/schema.ts",
  dialect: 'mysql',
  dbCredentials: {
    url: process.env.DB_URL!
  }
})