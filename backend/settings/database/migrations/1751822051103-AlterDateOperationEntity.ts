import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterDateOperationEntity1751822051103 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE operation
            MODIFY COLUMN date_hour TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        `)
    }   

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE operation
            MODIFY COLUMN date_hour TIMESTAMP NOT NUL
        `)
    }
}
