import { positionType } from "../../domain/types/position.types";
import { OperationInputDTO } from "../../DTO/operation.dto";

export interface OperationContractsRepo {
  save: (data: OperationInputDTO) => Promise<void>;
}