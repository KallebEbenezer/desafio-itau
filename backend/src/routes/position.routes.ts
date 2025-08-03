import { FastifyPluginAsync } from "fastify";
import { findPositions } from "../controllers/position.controllers";

export const positionRoutes: FastifyPluginAsync = async(app) => {
  app.post('/findPositions', findPositions);
} 