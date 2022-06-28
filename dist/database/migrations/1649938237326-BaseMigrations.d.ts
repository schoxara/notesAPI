import { MigrationInterface, QueryRunner } from "typeorm";
export declare class BaseMigrations1649938237326 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
