import { PositionContractsRepository } from "../../contracts/position.contracts";
import SumTotalOperations from "../../../infra/drizzle-querys/quantityOperations";
import AveragePrice from "../../../infra/drizzle-querys/averagePrice";

export class CreatePositionUseCase {
  constructor(private readonly positionRepository: PositionContractsRepository) {}

  async execute(data: { userId: number, assetId: number } ) {
    try{
      const quantity = await SumTotalOperations(data);
      const averagePrice = await AveragePrice(data);
      const pl = quantity * (14.5 - averagePrice) ;
      const newPosition = {
        userId: data.userId,
        assetId: data.assetId,
        quantity: quantity,
        averagePrice: averagePrice,
        pl: pl
      }
      await this.positionRepository.save(newPosition)
      // <Test only> return "created"
    }
    catch(err) {
      if(err instanceof Error) throw err;
    }
  }
}