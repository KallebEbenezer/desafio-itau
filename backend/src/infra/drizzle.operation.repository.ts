import { OperationContractsRepo } from "../application/contracts/operation.contracts";
import { db } from "../db";
import { operation } from "../db/schema";
import { OperationInputDTO } from "../DTO/operation.dto";

export class OperationInfraRepo implements OperationContractsRepo{
  async save(data: OperationInputDTO) {
    try{
      await db.insert(operation).values({ 
        userId: data.userId,
        assetId: data.assetId,
        quantity: data.quantity,
        unityPrice: data.unityPrice,
        operationType: data.operationType,
        brokerage: data.brokerage,
      })
    }
    catch(err) {
      if(err instanceof Error) throw err;
    }
  } 
}