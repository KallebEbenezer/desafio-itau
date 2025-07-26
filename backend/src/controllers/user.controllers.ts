import { FastifyRequest, FastifyReply } from "fastify";
import { createUserUseCase, findAllUseCase, fetchOperationsUseCase } from "../infra/plugin/plugin.layers";

interface CreateUserBody {
  email: string;
  name: string;
  brokerage: number
}

interface FetchOperation {
  userId: number;
  assetId: number;
}

export const createUser = async(req: FastifyRequest<{ Body: CreateUserBody }>, reply: FastifyReply) => {
  try{
    const { name, email, brokerage } = req.body;
    await createUserUseCase.execute({ name: name, email: email, brokerage: brokerage })
    .then(() => reply.status(200).send("User created with sucess!"));
  }
  catch(err) {
    if(err instanceof Error) reply.send({ Error: err.message });
  }
}

export const getAll = async(req: FastifyRequest, reply: FastifyReply) => {
  try{
    const users = await findAllUseCase.execute();
    reply.status(200).send({users});
  }
  catch(err) {
    if(err instanceof Error) reply.send(err.message);
  }
} 

export const fetchOperations = async(req: FastifyRequest<{ Body: FetchOperation }>, reply: FastifyReply) => {
  try{
    const { userId, assetId } = req.body;
    const operations = await fetchOperationsUseCase.execute({ userId: userId, assetId: assetId });
    if(!operations) throw new Error("Internal server error");
    return reply.send({operations});
  }
  catch(err) {
    if(err instanceof Error) reply.send({ Error: err.message });
  }
}