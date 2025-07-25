import { CreateUserUseCase } from "../../application/use-cases/user/create";
import { FindAllUseCase } from "../../application/use-cases/user/getAll";
import { UserInfraRepository } from "../drizzle.user.repository";

const repo = new UserInfraRepository();
export const createUserUseCase = new CreateUserUseCase(repo);
export const findAllUseCase = new FindAllUseCase(repo);