import { OperationRepository } from "../repositories/operations_repository";
import { UserRepository } from "../repositories/user_repository";
import { AssetRepository } from "../repositories/assets_repository";
import { OperationData } from "../../public/DTO/operation.dto";
import { Operation } from "../../settings/database/entities/Operation";

interface SearchOperationsData {
    userId: number;
    assetId: number;
    time: string;
    typeTime: string
}

export class OperationsService {
    private repository: OperationRepository;
    private userRepository: UserRepository;
    private assetRepository: AssetRepository
    constructor() {
        this.repository = new OperationRepository();
        this.userRepository = new UserRepository();
        this.assetRepository = new AssetRepository();
    }

    async creteOperation(operationData: OperationData): Promise<Operation | undefined> {
        try{
            const user = await this.userRepository.findById(operationData.userId);
            const asset = await this.assetRepository.findById(operationData.assetId);
            if(!user || !asset ) throw new Error("Nenhum user ou asset relacionado foi encontrado");
            return this.repository.createOperation(operationData);
        }   
        catch(err) {
            if(err instanceof Error){
                throw err
            }
        }
    }
    
    async getAllOperations() {
        return this.repository.getAllOperations();
    }
}