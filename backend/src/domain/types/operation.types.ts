import { InferSelectModel } from "drizzle-orm";
import { operation } from "../../infra/db/schema";

export type Operation = InferSelectModel<typeof operation>;