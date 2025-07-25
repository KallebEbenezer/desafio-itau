import { User } from "../../domain/types/user.types";
import { UserInputDTO } from "../../DTO/userDTO/user.dto";

export interface UserContractsRepo {
  save: (user: UserInputDTO) => Promise<User>;
  getAll: () => Promise<User[]>;
}