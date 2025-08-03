import { FastifyPluginAsync } from "fastify";
import { createOperation } from "../controllers/operation.controllers";

export const operationRoutes: FastifyPluginAsync = async(app) => {
  app.post('/newOperation', createOperation);
}