import { OperationInfraRepo } from "../drizzle.operation.repository";
import { CreateOperationUseCase } from "../../application/use-cases/operation/create";

import { FindAllUseCase } from "../../application/use-cases/user/getAll";
import { CreateUserUseCase } from "../../application/use-cases/user/create";
import { UserInfraRepository } from "../drizzle.user.repository";
import { FetchOperationsUseCase } from "../../application/use-cases/user/fetchOperations"; 

import { AssetInfraRepository } from "../drizzle.asset.repository";
import { CreateAssetUseCase } from "../../application/use-cases/asset/create";

const userRepo = new UserInfraRepository();
export const createUserUseCase = new CreateUserUseCase(userRepo);
export const findAllUseCase = new FindAllUseCase(userRepo);
export const fetchOperationsUseCase = new FetchOperationsUseCase(userRepo);

const assetRepo = new AssetInfraRepository();
export const createAssetUseCase = new CreateAssetUseCase(assetRepo);

const operationRepo = new OperationInfraRepo();
export const createOperationUseCase = new CreateOperationUseCase(operationRepo);