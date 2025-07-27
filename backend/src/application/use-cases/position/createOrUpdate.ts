import { CreatePositionUseCase } from "./create";
import { FindPositionsUseCase } from "./find";

export class CreateOrUpdateUseCase {
  constructor(
    private readonly findPositions: FindPositionsUseCase,
    private readonly createPosition: CreatePositionUseCase
  ) {}

  async execute(data: { userId: number, assetId: number } ) {
    const positions = await this.findPositions.execute(data); 

    if(positions.length <= 0) {
      await this.createPosition.execute(data);
    }
  }
} 