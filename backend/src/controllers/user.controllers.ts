import { FastifyRequest, FastifyReply } from "fastify";
import { userUsecases } from "../infra/adapters.infra/user.adapters";

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
    await userUsecases.create.execute({ name: name, email: email, brokerage: brokerage })
    .then(() => reply.status(200).send("User created with sucess!"));
  }
  catch(err) {
    if(err instanceof Error) reply.send({ Error: err.message });
  }
}


export const fetchOperations = async(req: FastifyRequest<{ Body: FetchOperation }>, reply: FastifyReply) => {
  try{
    const { userId, assetId } = req.body;
    const operations = await userUsecases.fetchOPerations.execute({ userId: userId, assetId: assetId });
    return reply.send({operations});
  }
  catch(err) {
    if(err instanceof Error) reply.send({ Error: err.message });
  }
} 