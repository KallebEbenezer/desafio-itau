import { CreateUserUseCase } from "../../application/use-cases/user/save";
import { UserInfraRepository } from "../drizzle.user.repo";
import { FetchOperationsUseCase } from "../../application/use-cases/user/fetchOperations"; 

const userRepo = new UserInfraRepository();
const createUserUseCase = new CreateUserUseCase(userRepo);
const fetchOperationsUseCase = new FetchOperationsUseCase(userRepo);

export const userUsecases = {
  create: createUserUseCase,
  fetchOPerations: fetchOperationsUseCase,
}