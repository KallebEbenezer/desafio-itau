import { FastifyRequest, FastifyReply } from "fastify";
import { operationUseCases } from "../infra/adapters.infra/operation.adapters";
import { OperationInputDTO } from "../DTO/operation.dto";

export const createOperation = async(
  req: FastifyRequest<{ Body: OperationInputDTO }>, 
  reply: FastifyReply
) => {
  console.log(req.body);
  try{
    const data: OperationInputDTO = req.body;
    await operationUseCases.create.execute(data)
    reply.status(200).send("Created with sucessful!")
  }
  catch(err) {
    if(err instanceof Error) reply.send({ Error: err.message });
  }
}