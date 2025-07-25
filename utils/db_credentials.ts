import "dotenv/config";

const host: string = String(process.env.DB_HOST);
const port: number = Number(process.env.DB_PORT);
const user: string = String(process.env.DB_USER);
const password: string = String(process.env.DB_PASSWORD);
const database: string = String(process.env.DATABASE);

export const dbCredentials = {
  host: host,
  port: port,
  user: user,
  password: password,
  database: database
}