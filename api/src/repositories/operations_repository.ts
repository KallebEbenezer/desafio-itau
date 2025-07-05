import { Repository } from "typeorm";
import { MainDataSource } from "../../../src/database/data-source";
import { Operation } from "../../../src/database/entities/Operation";

export class OperationRepository {
    private repository: Repository<Operation>;
    constructor() {
        this.repository = MainDataSource.getRepository(Operation);
    }
}