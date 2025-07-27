import { InferSelectModel } from "drizzle-orm";
import { position } from "../../infra/db/schema";

export type positionType = InferSelectModel<typeof position>;