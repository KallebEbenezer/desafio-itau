import { FastifyRequest, FastifyReply } from "fastify";
import { quotationUseCases } from "../infra/adapters.infra/quotation.adapters";

interface QuotationBody {
  assetId: number,
  unityPrice: number
}

export const createQuotation = async(req: FastifyRequest<{ Body: QuotationBody }>, reply: FastifyReply) => {
  try{
    const data = req.body;
    await quotationUseCases.save.execute(data);
    reply.status(200).send({ Success: "Quotation saved with success!"});
  }
  catch(err) {
      if(err instanceof Error) reply.send(err);
  }
} 