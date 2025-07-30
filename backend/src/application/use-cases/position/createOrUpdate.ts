import { positionUseCases } from "../../../infra/adapters.infra/position.adapters";
import { MakePosition } from "./makePosition";

export class CreateOrUpdateUseCase {
  private makePosition = new MakePosition();

  async execute(data: { userId: number, assetId: number }) {
    const findPosition = await positionUseCases.findPosition.execute(data);
    const newPosition = await this.makePosition.execute(data);
    
    if (findPosition.length <= 0) {
      await positionUseCases.createPosition.execute(newPosition);
    }
    else {
      await positionUseCases.updatePosition.execute(newPosition);
    }
  }
}