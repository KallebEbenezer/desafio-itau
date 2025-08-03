import { FetchPriceUseCase } from "../../application/use-cases/quotation/fetchPrice";
import { QuotationSaveUseCase } from "../../application/use-cases/quotation/save";
import { QuotationInfraRepository } from "../drizzle.quotation.repo";

const quotationInfraRepo = new QuotationInfraRepository();
const saveQuotationUseCase = new QuotationSaveUseCase(quotationInfraRepo);
const fetchPriceUseCase = new FetchPriceUseCase(quotationInfraRepo);

export const quotationUseCases = {
  save: saveQuotationUseCase,
  fetchPrice: fetchPriceUseCase
}