import { positionUseCases } from "../../../infra/adatpters.infra/position.adapters";

export class CreateOrUpdateUseCase {
  async execute(data: { userId: number, assetId: number, type: string }) {
    const positions = await positionUseCases.findPosition.execute(data); 

    if(positions.length <= 0) {
      await positionUseCases.createPosition.execute(data);
    }
  }
} 
