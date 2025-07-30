import { OperationInputDTO } from "../../DTO/operation.dto";

interface PositionMetrics {
  totalInvestiments: number,
  totalQuantity: number
}

export interface OperationContractsRepo {
  save: (data: OperationInputDTO) => Promise<void>;
  totalOperations: (data: { userId: number, assetId: number }) => Promise<number>;
  averagePrice: (data: { userId: number, assetId: number }) => Promise<PositionMetrics>;
}