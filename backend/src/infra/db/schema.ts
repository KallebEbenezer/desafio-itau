import { mysqlTable, int, varchar, float, mysqlEnum, datetime } from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

type myRow = {
  operation_type: string
}

export const user = mysqlTable('user', {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 20 }).notNull().unique(),
  email: varchar("email", { length: 50 }).notNull().unique(),
  brokerage: float("brokerage").notNull()
});

export const asset = mysqlTable('asset', {
  id: int("id").primaryKey().autoincrement(),
  code: varchar("code", { length: 10 }).notNull(),
  name: varchar("name", { length: 45 }).notNull().unique()
});

export const operation = mysqlTable('operation', {
  id: int().primaryKey().autoincrement(), 
  userId: int("user_id").references(() => user.id),
  assetId: int("asset_id").references(() => asset.id),
  quantity: int("quantity").notNull(),
  unityPrice: float("unity_price").notNull(),
  operation_type: varchar("operation_type", { length: 10}).notNull(),
  brokerage: float("brokerage").notNull(),
  dateHour: datetime("date_hour").default(sql`CURRENT_TIMESTAMP`)
});

export const position = mysqlTable('position', {
  id: int("id").primaryKey().autoincrement(),
  userId: int("user_id").references(() => user.id),
  assetId: int("asset_id").references(() => asset.id),
  quantity: int("quantity").notNull(),
  averagePrice: float("average_price").notNull(),
  pl: float("pl").notNull()
})
