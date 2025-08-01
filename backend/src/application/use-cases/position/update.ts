import { PositionInputDTO } from "../../../DTO/position.dto";
import { operationUseCases } from "../../../infra/adapters.infra/operation.adapters";
import { PositionContractsRepository } from "../../contracts/position.contracts";

export class PositionUpdateUseCase {
  constructor(private readonly positionRepository: PositionContractsRepository) { }

  async execute(data: PositionInputDTO) {
    try {
      const newQuantity = await operationUseCases.sumTotalOperations.execute({
        userId: data.userId,
        assetId: data.assetId
      });
      const newAvgPrice = await operationUseCases.averagePrice.execute(data);
      const newPl = newQuantity * (14.5 - newAvgPrice);
      const newPosition = {
        ...data,
        quantity: newQuantity,
        averagePrice: newAvgPrice,
        pl: newPl
      }
      await this.positionRepository.update(newPosition);
    }
    catch(err) {
      if(err instanceof Error) throw err;
    }
  }
}