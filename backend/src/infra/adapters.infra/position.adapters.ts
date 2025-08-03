import { CreatePositionUseCase } from "../../application/use-cases/position/save";
import { CreateOrUpdateUseCase } from "../../application/use-cases/position/createOrUpdate";
import { FindPositionsUseCase } from "../../application/use-cases/position/find";
import { PositionUpdateUseCase } from "../../application/use-cases/position/update";
import { PositionInfraRepository } from "../drizzle.position.repo";

const positionInfraRepo = new PositionInfraRepository();
const createOrUpdateUseCase = new CreateOrUpdateUseCase();
const findPositionUseCase = new FindPositionsUseCase(positionInfraRepo);
const createPositionUseCase = new CreatePositionUseCase(positionInfraRepo);
const positionUpdateUseCase = new PositionUpdateUseCase(positionInfraRepo);

export const positionUseCases = {
  findPosition: findPositionUseCase,
  createPosition: createPositionUseCase,
  createOrUpdate: createOrUpdateUseCase,
  updatePosition: positionUpdateUseCase
}