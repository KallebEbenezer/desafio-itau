import { db } from "./db";
import { positionType } from "../domain/types/position.types";
import { position } from "./db/schema";
import { and, eq } from "drizzle-orm";
import { PositionInputDTO } from "../DTO/position.dto";
import { PositionContractsRepository } from "../application/contracts/position.contracts";

export class PositionInfraRepository implements PositionContractsRepository {
  async find(data: {userId: number, assetId: number}): Promise<positionType[] | any>{
    return await db.select().from(position)
      .where(
        and(
          eq(position.userId, data.userId),
          eq(position.assetId, data.assetId)
        )
      )
  }

  async save(data: PositionInputDTO) {
    try{
      await db.insert(position).values(data);
    }
    catch(err) {
      if(err instanceof Error )throw err;
    }
  }

  async update(data: PositionInputDTO) {
    try{
      await db.update(position).set({
        quantity: data.quantity,
        averagePrice: data.averagePrice,
        pl: data.pl
      })
      .where(and(
        eq(position.userId, data.userId),
        eq(position.assetId, data.assetId)
      ))
    }
    catch(err) {
      if(err instanceof Error) throw err;
    }
  }
}