import { Operation } from "../../../domain/types/operation.types";
import { UserContractsRepo } from "../../contracts/user.contracts";

export class FetchOperationsUseCase {
  constructor(public readonly userRepo: UserContractsRepo) {}

  async execute(data: {userId: number, assetId: number}): Promise<Operation[] | undefined> {
    try{
      const operations = await this.userRepo.fetchOperations(data);
      if(operations.length == 0) throw new Error("No operations in this assset in last few 30 days");
      return operations;
    }
    catch(err) {
      if(err instanceof Error) throw err;
    }
  }
}