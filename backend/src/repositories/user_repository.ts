import { Repository } from "typeorm";
import { MainDataSource } from "../../settings/database/data-source";
import { User } from "../../settings/database/entities/User";

interface DataUser {
    username: string;
    email: string;
    brokerage: number;
}

export class UserRepository {
    private repository: Repository<User>;
    constructor() {
        this.repository = MainDataSource.getRepository(User);
    }

    async findById(id: number): Promise<User | null> {
        return this.repository.findOne({ where: { id } });
    }

    async create(user: DataUser): Promise<User> {
        return this.repository.save(user);
    }

    async update(user: User): Promise<User> {
        return this.repository.save(user);
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}