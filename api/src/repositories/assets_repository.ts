import { Repository } from "typeorm";
import { MainDataSource } from "../../../src/database/data-source";
import { Assets } from "../../../src/database/entities/Assets";

export class AssetsRepository {
    private repository: Repository<Assets>;
    constructor() {
        this.repository = MainDataSource.getRepository(Assets);
    }

    //async
}