import Fastify from "fastify";
import { serverConfig } from "../utils/server_configs";
import userRoutes from "./routes/user.routes";

const server = Fastify({ logger: true });

server.register(userRoutes, { prefix: '/user' });

const startServer = async () => {
  try {
    await server.listen({ port: serverConfig.port, host: serverConfig.host });
    console.log(`✅ Listening at http://${serverConfig.host}:${serverConfig.port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

startServer();