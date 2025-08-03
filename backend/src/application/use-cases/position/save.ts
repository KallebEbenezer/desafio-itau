import { PositionContractsRepository } from "../../contracts/position.contracts";
import { PositionInputDTO } from "../../../DTO/position.dto";

export class CreatePositionUseCase {
  constructor(
    private readonly positionRepository: PositionContractsRepository
  ) { }

  async execute(data: PositionInputDTO) {
    try {
      await this.positionRepository.save(data);
    }
    catch (err) {
      if (err instanceof Error) throw err;
    }
  }
}