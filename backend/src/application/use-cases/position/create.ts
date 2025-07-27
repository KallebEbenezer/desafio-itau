import { PositionContractsRepository } from "../../contracts/position.contracts";
import SumTotalOperations from "../../../infra/drizzle-querys/quantityOperations";
import AveragePrice from "../../../infra/drizzle-querys/averagePrice";

export class CreatePositionUseCase {
  constructor(private readonly positionRepository: PositionContractsRepository) {}

  async execute(data: { userId: number, assetId: number, type: string} ) {
    try{
      const quantity = await SumTotalOperations(data);
      const averagePrice = await AveragePrice(data);
      const pl = quantity * (21.5 - averagePrice);
      const newPosition = {
        userId: data.userId,
        assetId: data.assetId,
        quantity: quantity,
        averagePrice: averagePrice,
        pl: pl
      }
      console.log(newPosition);
      await this.positionRepository.save(newPosition);
    }
    catch(err) {
      if(err instanceof Error) throw err;
    }
  }
}