import { positionUseCases } from "../../../infra/adapters.infra/position.adapters";

export class CreateOrUpdateUseCase {
  async execute(data: { userId: number, assetId: number }) {
    const findPosition = await positionUseCases.findPosition.execute(data); 
    
    if(findPosition.length <= 0 ) {
      await positionUseCases.createPosition.execute(data);
    }
    else{
      const { id, ...position } = findPosition[0];
      await positionUseCases.updatePosition.execute(position);
    }
  }
}