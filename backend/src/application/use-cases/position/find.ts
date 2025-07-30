import { PositionOutPutDTO } from "../../../DTO/position.dto";
import { PositionContractsRepository } from "../../contracts/position.contracts";

export class FindPositionsUseCase {
  constructor(private readonly positionRepository: PositionContractsRepository) {}

  async execute(data: {userId: number, assetId: number}): Promise<PositionOutPutDTO[]> {
    return await this.positionRepository.find(data);
  } 
}