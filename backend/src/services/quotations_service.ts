import { Position } from "../../settings/database/entities/Position";
import { Quotation } from "../../settings/database/entities/Quotation";
import { QuotationRepository } from "../repositories/quotations_repository";
import { Quotation_Input_Dto } from "../../public/DTO/quotation.dto";

export class QuotationService {
    private quotationRepository: QuotationRepository;
    constructor(){
        this.quotationRepository = new QuotationRepository();
    }

    async newQuotation(quotationData: Quotation_Input_Dto): Promise<Quotation> {
        try {
            const relatedAsset = await this.quotationRepository.findAssets(quotationData.asset_id);
            if (!relatedAsset) throw new Error("Nenhum ativo relacionado encontrado!");
            
            const newQuotation = await this.quotationRepository.newQuotation({
                asset: relatedAsset,
                price: quotationData.price
            })

            const positions = await this.quotationRepository.findPositions(quotationData.user_id);
            await this.setNewPl(positions, quotationData)
            return newQuotation
        }
        catch (err) {
            if (err instanceof Error) throw Error(`Error: ${err.message}`)
            throw err;
        }
    }

    async setNewPl(positions: Position[], quotation: Quotation_Input_Dto): Promise<void> {
        try{
            for(const position of positions){
                const pl = (quotation.price - position.average_price) * position.quantity;
                const newPosition = { ...position, pl };
                await this.quotationRepository.setNewPL(newPosition);
            }
        }
        catch(err) {
            if(err instanceof Error) {
                throw Error(`Error: ${err.message}`);
            }
        }
    }
}