import { FastifyInstance } from "fastify"
import { userRoutes } from "./user.routes" 
import { assetRoutes } from "./asset.routes" 
import { operationRoutes } from "./operation.routes" 
import { positionRoutes } from "./position.routes" 
import { quotationRoutes } from "./quotation.routes" 

export default async function RegisterRoutes(fastify: FastifyInstance) {
  fastify.register(userRoutes, { prefix: '/user' });
  fastify.register(assetRoutes, { prefix: '/asset'});
  fastify.register(operationRoutes, { prefix: '/operation'});
  fastify.register(positionRoutes, { prefix: '/position'});
  fastify.register(quotationRoutes, { prefix: '/quotation'});
}