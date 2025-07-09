import { MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePositionEntity1751740366710 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "position",
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
                        name: "average_price",
                        type: "decimal",
                        precision: 15,
                        scale: 2,
                        isNullable: false
                    },
                    {
                        name: "pl",
                        type: "decimal",
                        precision: 15,
                        scale: 2,
                        isNullable: false
                    }
                ],
                foreignKeys: [
                    {
                        columnNames: ["user_id"],
                        referencedTableName: "user",
                        referencedColumnNames: ["id"]
                    },
                    {
                        columnNames: ["assets_id"],
                        referencedTableName: "assets",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        ); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("position");
    }
}
