import { User } from "../../domain/types/user.types";
import { UserInputDTO } from "../../DTO/user.dto";
import { Operation } from "../../domain/types/operation.types";


export interface UserContractsRepo {
  save: (user: UserInputDTO) => Promise<void>;
  getAll: () => Promise<User[]>;
  fetchOperations: (data: { userId: number, assetId: number }) => Promise<Operation[]>; 
}