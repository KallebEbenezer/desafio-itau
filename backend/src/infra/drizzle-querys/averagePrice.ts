import { operation } from "../db/schema";
import { db } from "../db";
import { sql, and, eq } from "drizzle-orm";

interface paramsQuery {
  userId: number, 
  assetId: number,
  type: string
}

export async function operationsAndPrice(data: paramsQuery){
  const result = await db.select(
    { 
      totalOperations: sql<number>`SUM(${operation.quantity})`,
      totalPrice: sql<number>`SUM(${operation.unityPrice})`
    }
  ).from(operation).where(and(
    eq(operation.userId, data.userId),
    eq(operation.assetId, data.assetId),
    eq(operation.operation_type, data.type)
  )); 
  return {
    totalOperations: Number(result[0]?.totalOperations ?? 0),
    totalPrice: Number(result[0]?.totalPrice ?? 0)
  }
}

export default async function AveragePrice(data: paramsQuery) {
  const result = operationsAndPrice({ userId: data.userId, assetId: data.assetId, type: data.type});
  const totalPrice = (await result).totalPrice;
  const totalOp = (await result).totalOperations;
  return Number(totalOp / totalPrice)
}