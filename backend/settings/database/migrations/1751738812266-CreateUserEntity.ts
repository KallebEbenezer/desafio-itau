import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserEntity1751738812266 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "username",
                        type: "varchar",
                        isUnique: true,
                        length: "30",
                        isNullable: false,                    
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true,
                        length: "50",
                        isNullable: false,
                    },
                    {
                        name: "brokerage",
                        type: "decimal",
                        precision: 10,
                        scale: 2,
                        default: 0.00,
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user");
    }
}
