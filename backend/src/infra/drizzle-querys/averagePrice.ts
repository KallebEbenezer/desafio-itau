import { operation } from "../db/schema";
import { db } from "../db";
import { sql, and, eq } from "drizzle-orm";

interface paramsQuery {
  userId: number,
  assetId: number,
}

export async function operationsAndPrice(data: paramsQuery) {
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
}

export default async function AveragePrice(data: paramsQuery) {
  const result = operationsAndPrice({ userId: data.userId, assetId: data.assetId });
  const totalPrice = (await result).totalInvestiments;
  const totalOperations = (await result).totalQuantity;
  return  Number((totalPrice / totalOperations).toFixed(2));
}