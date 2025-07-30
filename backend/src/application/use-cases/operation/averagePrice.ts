import { OperationContractsRepo } from "../../contracts/operation.contracts";

export class AveragePriceUseCase {
  constructor(private readonly operationRepository: OperationContractsRepo) {}

  async execute(data: { userId: number, assetId: number }): Promise<number> {
    const positionMetrics = await this.operationRepository.averagePrice(data);
    return Number(
      ((positionMetrics.totalInvestiments) / (positionMetrics.totalQuantity)).toFixed(2)
    ); 
  }
}