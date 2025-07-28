import { FastifyPluginAsync } from "fastify";
import { createAsset } from "../controllers/asset.controllers";
import { findPositions } from "../controllers/position.controllers";

export const positionRoutes: FastifyPluginAsync = async(app) => {
  app.post('/findPositions', findPositions);
} 