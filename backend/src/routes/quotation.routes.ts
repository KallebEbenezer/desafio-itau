import { FastifyPluginAsync } from "fastify";
import { createQuotation } from "../controllers/quotation.controllers";

export const quotationRoutes: FastifyPluginAsync = async(app) => {
  app.post('/newQuotation', createQuotation);
} 