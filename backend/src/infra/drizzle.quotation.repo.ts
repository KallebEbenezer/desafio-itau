import { QuotationContractsRepository } from "../application/contracts/quotation.contracts";
import { QuotationInputDTO } from "../DTO/quotation.dto";
import { db } from "./db";
import { eq, sql } from "drizzle-orm";
import { quotation } from "./db/schema";

export class QuotationInfraRepository implements QuotationContractsRepository {
  async save(data: QuotationInputDTO): Promise<void> {
    try{
      await db.insert(quotation).values(data)
    }
    catch(err) {
      if(err instanceof Error) throw err;
    }
  } 

  async fetchPrice(assetId: number): Promise<number | undefined> {
    try{
      const price = await db.select({
        price: sql<number>`${quotation.unityPrice}`
      }).from(quotation)
        .where(eq(quotation.assetId, assetId));

      return Number(price[0]?.price);
    }
    catch(err) {
      if(err instanceof Error) throw err; 
    }
  }
}