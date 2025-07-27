import { positionType } from "../../../domain/types/position.types";
import { PositionContractsRepository } from "../../contracts/position.contracts";

export class FindPositionsUseCase {
  constructor(private readonly positionRepository: PositionContractsRepository) {}

  async execute(data: {userId: number, assetId: number}): Promise<positionType[]> {
    return await this.positionRepository.find(data);
  } 
}