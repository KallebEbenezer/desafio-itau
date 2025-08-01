import { OperationInputDTO } from "../../../DTO/operation.dto";
import { OperationContractsRepo} from "../../contracts/operation.contracts";
import { positionUseCases } from "../../../infra/adapters.infra/position.adapters";

export class CreateOperationUseCase {
  constructor(
    private readonly operationRepo: OperationContractsRepo,
  ) {}

  async execute(data: OperationInputDTO): Promise<void> {
    await this.operationRepo.save(data);

    await positionUseCases.createOrUpdate.execute({
      userId: data.userId, 
      assetId: data.assetId, 
    });
  }
}