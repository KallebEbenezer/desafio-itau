import { FastifyReply, FastifyRequest } from "fastify";
import { assetUseCases } from "../infra/adapters.infra/asset.adapters";

interface ReqBody {
  name: string;
  code: string;
}

export const createAsset = async(req: FastifyRequest<{ Body: ReqBody }>, reply: FastifyReply) => {
  try{
    const { name, code } = req.body;
    await assetUseCases.create.execute({ name: name, code: code });
    reply.status(200).send({ Message: "Asset created with success!"});
  }
  catch(err) {
    if(err instanceof Error) reply.send({ Error: err.message });
  }
}
