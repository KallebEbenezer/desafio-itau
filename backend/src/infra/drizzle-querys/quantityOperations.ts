import { db } from "../db";
import { and, eq, sql } from "drizzle-orm";
import { operation } from "../db/schema";

export default async function SumTotalOperations(data: { 
  userId: number, 
  assetId: number, 
  type: string
}) {
  const totalOp = await db.select(
    { totalQuantity: sql<number>`SUM(${operation.quantity})`}
  ).from(operation)
    .where(
      and(
        eq(operation.userId, data.userId),
        eq(operation.assetId, data.assetId),
        eq(operation.operation_type, data.type)
      )
    );
  return(Number(totalOp[0]?.totalQuantity ?? 0))
}