import { OperationInfraRepo } from "../drizzle.operation.repository";
import { CreateOperationUseCase } from "../../application/use-cases/operation/create";
import { SumTotalOperations } from "../../application/use-cases/operation/sumTotalOperations";
import { AveragePriceUseCase } from "../../application/use-cases/operation/averagePrice";

const operationRepo = new OperationInfraRepo();
const createOperationUseCase = new CreateOperationUseCase(operationRepo);
const sumTotalOperationUseCase = new SumTotalOperations(operationRepo);
const averagePriceUseCase = new AveragePriceUseCase(operationRepo);

export const operationUseCases = {
  create: createOperationUseCase,
  sumTotalOperations: sumTotalOperationUseCase,
  averagePrice: averagePriceUseCase
}