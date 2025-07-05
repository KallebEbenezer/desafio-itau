import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOperationEntity1751740207368 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "operation",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    }, 
                    {
                        name: "user_id",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "assets_id",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "quantity",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "unit_price",
                        type: "decimal",
                        precision: 15,
                        scale: 2,
                        isNullable: false
                    },
                    {
                        name: "type",
                        type: "varchar",
                        length: "10",
                        isNullable: false
                    },
                    {
                        name: "brokerage",
                        type: "decimal",
                        precision: 5,
                        scale: 2,
                        default: 0.00,
                        isNullable: false
                    },
                    {
                        name: "date_hour",
                        type: "timestamp",
                        isNullable: false
                    }
                ],
                foreignKeys: [
                    {
                        columnNames: ["user_id"],
                        referencedTableName: "user",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    },
                    {
                        columnNames: ["assets_id"],
                        referencedTableName: "assets",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    }
                ]
            })
        );  
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("operation");
    }
}
