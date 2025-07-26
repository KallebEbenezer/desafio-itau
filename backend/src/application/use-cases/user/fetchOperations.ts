import { Operation } from "../../../domain/types/operation.types";
import { UserContractsRepo } from "../../contracts/user.contracts";

export class FetchOperationsUseCase {
  constructor(public readonly userRepo: UserContractsRepo) {}

  async execute(data: {userId: number, assetId: number}): Promise<Operation[]> {
    return await this.userRepo.fetchOperations(data);
  }
}