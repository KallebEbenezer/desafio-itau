import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateIndex1751765933619 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE INDEX idx_operation_user_assets_date
            ON operation (user_id, assets_id, date_hour);
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP INDEX idx_operation_user_assets_date;
        `)
    }
}