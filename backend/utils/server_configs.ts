import "dotenv/config"; 

const host: string = String(process.env.HOST_SERVER);
const port: number = Number(process.env.PORT_SERVER ?? 3000);

export const serverConfig = {
  host: host,
  port: port
}