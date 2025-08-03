import { InferSelectModel } from "drizzle-orm";
import { quotation } from "../../infra/db/schema";

export type quotationType = InferSelectModel<typeof quotation>;