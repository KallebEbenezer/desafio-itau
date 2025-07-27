import { PositionInputDTO } from "../../../DTO/position.dto";
import { PositionContractsRepository } from "../../contracts/position.contracts";

export class CreatePositionUseCase {
  constructor(private readonly positionRepo: PositionContractsRepository) {}

  async execute(data: {userId: number, assetId: number}) {
    try{
      const newPosition = {
        ...data,
        quantity: 0,
        averagePrice: 0.0,
        pl: 0.0
      }
      await this.positionRepo.create(newPosition);
    }
    catch(err) {
      if(err instanceof Error) throw err;
    }
  }
}