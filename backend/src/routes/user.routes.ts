import { FastifyPluginAsync } from "fastify";
import { createUser, fetchOperations, getAll } from "../controllers/user.controllers";

const userRoutes: FastifyPluginAsync = async (app) => {
  app.post('/newUser', createUser);
  app.get('/getUsers', getAll);
  app.post('/operations', fetchOperations);
};

export default userRoutes;  