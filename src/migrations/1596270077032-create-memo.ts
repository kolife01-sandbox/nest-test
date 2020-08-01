import {MigrationInterface, QueryRunner} from "typeorm";

export class createMemo1596270077032 implements MigrationInterface {
    name = 'createMemo1596270077032'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "memo" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "description" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "memo"`);
    }

}
