import Fastify from "fastify";
import { serverConfig } from "../utils/server_configs";
import RegisterRoutes from "./routes";

const server = Fastify({ logger: true });

const startServer = async () => {
  try {
    await RegisterRoutes(server);;
    await server.listen({ port: serverConfig.port, host: serverConfig.host });
    console.log(`✅ Listening at http://${serverConfig.host}:${serverConfig.port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

startServer();