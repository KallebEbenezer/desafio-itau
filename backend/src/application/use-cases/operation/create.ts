import { Operation } from "../../../domain/models/Operation";
import { OperationInputDTO } from "../../../DTO/operation.dto";
import { OperationContractsRepo} from "../../contracts/operation.contracts";
import { positionUseCases } from "../../../infra/adatpters.infra/position.adapters";

export class CreateOperationUseCase {
  constructor(
    private readonly operationRepo: OperationContractsRepo,
  ) {}

  async execute(data: OperationInputDTO) {
    const operation = new Operation(
      data.userId, 
      data.assetId,
      data.quantity, 
      data.unityPrice,  
      data.operation_type,
      data.brokerage
    )
    await this.operationRepo.save(operation);
    await positionUseCases.createOrUpdate.execute({userId: data.userId, assetId: data.assetId});
  }
}