import { QuotationInputDTO } from "../../../DTO/quotation.dto";
import { QuotationContractsRepository } from "../../contracts/quotation.contracts";
import { MakePosition } from "../position/makePosition";

export class QuotationSaveUseCase {
  constructor(
    private quotationRepo: QuotationContractsRepository
  ) {}
  // private makePosition = new MakePosition();

  async execute(data: QuotationInputDTO) {
    try{
      await this.quotationRepo.save(data);
      // await this.makePosition.execute();
      // await positionUseCases.updatePosition.updateAll();
    }
    catch(err) {
      if(err instanceof Error) throw err;
    }
  }
}