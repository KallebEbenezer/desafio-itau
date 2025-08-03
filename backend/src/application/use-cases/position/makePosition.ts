import { operationUseCases } from "../../../infra/adapters.infra/operation.adapters";
import { quotationUseCases } from "../../../infra/adapters.infra/quotation.adapters";

interface MakePositionInterface {
  userId: number,
  assetId: number,
  quantity: number,
  averagePrice: number,
  pl: number
}

interface PositionParams {
  userId: number,
  assetId: number
}

async function calculatePosition(data: PositionParams) {
  const [quantity, averagePrice, currentAssetPrice] = await Promise.all([
    operationUseCases.sumTotalOperations.execute(data),
    operationUseCases.averagePrice.execute(data),
    quotationUseCases.fetchPrice.execute(data.assetId)
  ])
  const safePrice = currentAssetPrice ?? 0;

  const pl = Number(((safePrice * quantity) - (averagePrice * quantity)).toFixed(2));
  return {
    quantity: quantity,
    avgPrice: averagePrice,
    currentAssetPrice: currentAssetPrice,
    pl: pl
  }
}

export class MakePosition {
  async execute(data: PositionParams): Promise<MakePositionInterface> {
    const result = calculatePosition(data);

    return {
      userId: data.userId,
      assetId: data.assetId,
      quantity: (await result).quantity,
      averagePrice: (await result).avgPrice,
      pl: (await result).pl
    }
  }
}