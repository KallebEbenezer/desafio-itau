import { FastifyReply, FastifyRequest } from "fastify";
import { positionUseCases } from "../infra/adapters.infra/position.adapters";

export const findPositions = async(req: FastifyRequest, reply: FastifyReply) => {
  try{
    const data = req.body as { userId: number, assetId: number }
    const positions = await positionUseCases.findPosition.execute(data);
    if(positions.length <= 0) return reply.send({Message: "User do not have positions in this asset!"});
    reply.send({ Positions: positions});
  }
  catch(err) {
    if(err instanceof Error) reply.send({ Error: err});
  }
}