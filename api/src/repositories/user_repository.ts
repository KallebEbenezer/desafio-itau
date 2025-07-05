import { Repository } from "typeorm";
import { MainDataSource } from "../../../src/database/data-source";
import { User } from "../../../src/database/entities/User";

export class UserRepository {
    private repository: Repository<User>;
    constructor() {
        this.repository = MainDataSource.getRepository(User);
    }

    async findById(id: string): Promise<User | null> {
        return this.repository.findOne({ where: { id } });
    }

    async searchOperations(userId: number): Promise<User[]> {
        return this.repository
            .createQueryBuilder("user")
            .leftJoinAndSelect("user.operations", "operation")
            .leftJoinAndSelect("operation.assets", "assets")
            .where("user.id = :userId", { userId })
            .getMany();
    }

    async create(user: User): Promise<User> {
        return this.repository.save(user);
    }

    async update(user: User): Promise<User> {
        return this.repository.save(user);
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}