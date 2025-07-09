import { Request, Response } from "express";
import { Quotation_Input_Dto } from "../../public/DTO/quotation.dto";
import { QuotationService } from "../services/quotations_service";

const quotationService = new QuotationService();

export const newQuotation = async(req: Request, res: Response) => {
    try{
        const quotationData: Quotation_Input_Dto = req.body;
        
        const newQuotation = await quotationService.newQuotation(quotationData);
        res.status(200).json(`New quotation: ${newQuotation}`);
    }
    catch(err) {
        if(err instanceof Error){
            res.status(500).json(`Error: ${err.message}`);
        }
        console.log(err);
    }
}