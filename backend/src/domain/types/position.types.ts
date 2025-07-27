import { InferSelectModel } from "drizzle-orm";
import { position } from "../../db/schema";

export type positionType = InferSelectModel<typeof position>;