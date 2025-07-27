import { CreatePositionUseCase } from "../../application/use-cases/position/create";
import { CreateOrUpdateUseCase } from "../../application/use-cases/position/createOrUpdate";
import { FindPositionsUseCase } from "../../application/use-cases/position/find";
import { PositionInfraRepository } from "../drizzle.position.repository";

const positionInfraRepo = new PositionInfraRepository();
const createOrUpdateUseCase = new CreateOrUpdateUseCase();
const findPositionUseCase = new FindPositionsUseCase(positionInfraRepo);
const createPositionUseCase = new CreatePositionUseCase(positionInfraRepo);

export const positionUseCases = {
  findPosition: findPositionUseCase,
  createPosition: createPositionUseCase,
  createOrUpdate: createOrUpdateUseCase
}