import { MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateQuotationEntity1751740461961 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "quotation",
                columns: [
                    {
                        name: "id",
                        type: "int",   
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "assets_id",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "price",
                        type: "decimal",
                        precision: 15,  
                        scale: 2,
                        isNullable: false
                    },
                    {
                        name: "date_hour",
                        type: "timestamp",
                        isNullable: false,
                        default: "CURRENT_TIMESTAMP",
                    }
                ],
                foreignKeys: [
                    {
                        columnNames: ["assets_id"],
                        referencedTableName: "assets",
                        referencedColumnNames: ["id"],
                    },
                ]
            })
        );  
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("quotation");
    }
}
