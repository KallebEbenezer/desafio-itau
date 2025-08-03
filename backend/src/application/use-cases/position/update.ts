import { PositionInputDTO } from "../../../DTO/position.dto";
import { PositionContractsRepository } from "../../contracts/position.contracts";

export class PositionUpdateUseCase {
  constructor(private readonly positionRepository: PositionContractsRepository) { }

  async updateOne(data: PositionInputDTO) {
    try {
      await this.positionRepository.updateOne(data);
    }
    catch(err) {
      if(err instanceof Error) throw err;
    }
  }
  
  async updateAll(data: PositionInputDTO) {
    try {
      await this.positionRepository.updateAll(data);
    }
    catch(err) {
      if(err instanceof Error) throw err;
    }
  }
}