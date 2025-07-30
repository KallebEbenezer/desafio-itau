import { operationUseCases } from "../../../infra/adapters.infra/operation.adapters";

interface MakePositionInterface{
  userId: number,
  assetId: number,
  quantity: number,
  averagePrice: number, 
  pl: number
}

export class MakePosition {
  async execute(data: { userId: number, assetId: number }): Promise<MakePositionInterface> {
    const quantity = await operationUseCases.sumTotalOperations.execute(data);
    const averagePrice = await operationUseCases.averagePrice.execute(data);
    const pl = Number((quantity * - (14.5 - averagePrice)).toFixed(2));

    return {
      userId: data.userId,
      assetId: data.assetId,
      quantity: quantity,
      averagePrice: averagePrice,
      pl: pl
    }
  }
}