import { OperationContractsRepo } from "../../contracts/operation.contracts";

export class SumTotalOperations {
  constructor(private readonly operationRepository: OperationContractsRepo) {}

  async execute(data: { userId: number, assetId: number }): Promise<number> {
    return await this.operationRepository.totalOperations(data);
  }
}