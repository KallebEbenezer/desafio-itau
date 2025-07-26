import { Operation } from "../../../domain/models/Operation";
import { OperationInputDTO } from "../../../DTO/operation.dto";
import { OperationContractsRepo} from "../../contracts/operation.contracts";

export class CreateOperationUseCase {
  constructor(private readonly operationRepo: OperationContractsRepo) {}

  async execute(data: OperationInputDTO) {
    const operation = new Operation(
      data.userId, 
      data.assetId,
      data.quantity, 
      data.unityPrice, 
      data.operationType,
      data.brokerage
    )
    await this.operationRepo.save(operation);
  }
}