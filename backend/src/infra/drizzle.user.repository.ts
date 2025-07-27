import { db } from "./db";
import { eq, and, gte, sql } from "drizzle-orm"
import { operation, user } from "./db/schema";
import { User } from "../domain/types/user.types";
import { UserContractsRepo } from "../application/contracts/user.contracts";
import { UserInputDTO } from "../DTO/user.dto";
import { Operation } from "../domain/types/operation.types";

export class UserInfraRepository implements UserContractsRepo {

  async save(data: UserInputDTO): Promise<void> {
    try{
      await db.insert(user).values(data);
    }
    catch(err) {
      if(err instanceof Error) throw new Error(err.message);
    }
  }

  async fetchOperations(data: {userId: number, assetId: number }): Promise<Operation[]> {
    return await db.select()
      .from(operation)
      .where(and(
        eq(operation.userId, data.userId),
        eq(operation.assetId, data.assetId),
        gte(operation.dateHour, sql`NOW() - INTERVAL 5 hour`)
      ));
  }
}