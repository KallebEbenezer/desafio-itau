import { User } from "../../domain/types/user.types";

export interface UserContractsRepo {
  save: (user: User) => Promise<void>;
  getAll: () => Promise<User[]>;
}