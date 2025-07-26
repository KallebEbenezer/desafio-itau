import { FastifyPluginAsync } from "fastify";
import { createAsset } from "../controllers/asset.controllers";

export const assetRoutes: FastifyPluginAsync = async(app) => {
  app.post('/newAsset', createAsset);
} 