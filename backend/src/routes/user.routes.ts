import { FastifyPluginAsync } from "fastify";
import { createUser, fetchOperations } from "../controllers/user.controllers";

const userRoutes: FastifyPluginAsync = async (app) => {
  app.post('/newUser', createUser);
  app.post('/operations', fetchOperations);
};

export default userRoutes;  