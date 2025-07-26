import { InferSelectModel } from "drizzle-orm";
import { operation } from "../../db/schema";

export type Operation = InferSelectModel<typeof operation>;