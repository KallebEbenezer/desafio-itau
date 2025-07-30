import { OperationContractsRepo } from "../application/contracts/operation.contracts";
import { db } from "./db";
import { and, eq, sql } from "drizzle-orm";
import { operation } from "./db/schema";
import { OperationInputDTO } from "../DTO/operation.dto";

interface PositionMetrics {
  totalInvestiments: number,
  totalQuantity: number
}

export class OperationInfraRepo implements OperationContractsRepo {
  async save(data: OperationInputDTO) {
    try {
      await db.insert(operation).values(data);
    }
    catch (err) {
      if (err instanceof Error) throw err;
    }
  }

  async totalOperations(data: { userId: number, assetId: number }): Promise<number> {
    const totalOp = await db.select(
      { totalQuantity: sql<number>`SUM(${operation.quantity})` }
    ).from(operation)
      .where(
        and(
          eq(operation.userId, data.userId),
          eq(operation.assetId, data.assetId),
          eq(operation.operation_type, "buy")
        )
      );
    return Number((totalOp[0]?.totalQuantity ?? 0));
  }

  async averagePrice(data: { userId: number; assetId: number; }): Promise<PositionMetrics> {
    const result = await db.select({
      totalInvestiments: sql<number>`SUM(${operation.quantity} * ${operation.unityPrice})`,
      totalQuantity: sql<number>`SUM(${operation.quantity})`
    })
      .from(operation)
      .where(and(
        eq(operation.userId, data.userId),
        eq(operation.assetId, data.assetId),
        eq(operation.operation_type, "buy")
      ));

    return {
      totalInvestiments: Number(result[0]?.totalInvestiments ?? 0),
      totalQuantity: Number(result[0]?.totalQuantity ?? 0)
    }
  };
}