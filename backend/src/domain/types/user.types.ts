import { InferSelectModel } from "drizzle-orm";
import { user } from "../../infra/db/schema";

export type User = InferSelectModel<typeof user>;