import { FastifyPluginAsync } from "fastify";
import { createUser, getAll } from "../controllers/user_controller";

const userRoutes: FastifyPluginAsync = async (app) => {
  app.post('/newUser', createUser);
  app.get('/getUsers', getAll);
};

export default userRoutes;