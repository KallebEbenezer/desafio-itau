import { FastifyRequest, FastifyReply } from "fastify";
import { createUserUseCase, findAllUseCase } from "../infra/plugin/plugin.layers";

interface CreateUserBody {
  email: string;
  name: string;
  brokerage: number
}

export const createUser = async(req: FastifyRequest<{ Body: CreateUserBody }>, reply: FastifyReply) => {
  try{
    const { name, email, brokerage } = req.body;
    await createUserUseCase.execute({ name: name, email: email, brokerage: brokerage })
    .then(() => reply.status(200).send("User created with sucess!"));
  }
  catch(err) {
    return reply.status(500).send({ message: "Internal error"})
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