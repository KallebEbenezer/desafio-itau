import { Repository } from "typeorm";
import { MainDataSource } from "../../settings/database/data-source";
import { Operation } from "../../settings/database/entities/Operation";
import { User } from "../../settings/database/entities/User";
import { Asset } from "../../settings/database/entities/Assets";

import { OperationData } from "../../public/DTO/operation.dto";

export class OperationRepository {
    private repository: Repository<Operation>;
    private userRepository: Repository<User>;
    private assetsRepository: Repository<Asset>;

    constructor() {
        this.repository = MainDataSource.getRepository(Operation);
        this.userRepository = MainDataSource.getRepository(User);
        this.assetsRepository = MainDataSource.getRepository(Asset);
    }

    async createOperation(operationData: OperationData): Promise<Operation | undefined> {
        try{

            const newOperation = this.repository.create({
                
                quantity: operationData.quantity,
                unit_price: operationData.unit_price,
                type: operationData.type,
                brokerage: operationData.brokerage
            })
            
            return await this.repository.save(newOperation);
        }
        catch(err) {
            if(err instanceof Error) {
                throw err;
            }
        }
    }

    async getAllOperations(): Promise<Operation[]> {
        return this.repository.find();
    }
}