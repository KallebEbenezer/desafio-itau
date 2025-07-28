import { PositionOutPutInterface } from "../../../DTO/position.dto";
import { PositionContractsRepository } from "../../contracts/position.contracts";

export class FindPositionsUseCase {
  constructor(private readonly positionRepository: PositionContractsRepository) {}

  async execute(data: {userId: number, assetId: number}): Promise<PositionOutPutInterface[]> {
    return await this.positionRepository.find(data);
  } 
}