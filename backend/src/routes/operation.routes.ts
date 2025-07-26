import { FastifyPluginAsync } from "fastify";
import { createOperation } from "../controllers/operation.controllers";

const operationRoutes: FastifyPluginAsync = async(app) => {
  app.post('/newOperation', createOperation);
}

export default operationRoutes;