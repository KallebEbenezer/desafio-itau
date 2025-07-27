import { OperationInfraRepo } from "../drizzle.operation.repository";
import { CreateOperationUseCase } from "../../application/use-cases/operation/create";

const operationRepo = new OperationInfraRepo();
const createOperationUseCase = new CreateOperationUseCase(operationRepo);

export const operationUseCases = {
  create: createOperationUseCase
}