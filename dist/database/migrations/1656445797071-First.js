"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.First1656445797071 = void 0;
class First1656445797071 {
    constructor() {
        this.name = 'First1656445797071';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE "public"."users_role_enum" AS ENUM('admin', 'member')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" "public"."users_role_enum" NOT NULL DEFAULT 'member', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "options" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, "isCorrect" boolean NOT NULL, "questionId" integer, CONSTRAINT "PK_d232045bdb5c14d932fba18d957" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "quizes" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" text NOT NULL, "isActive" boolean NOT NULL DEFAULT '1', CONSTRAINT "PK_2c6a29e4f537875fdef1f2e5881" PRIMARY KEY ("id")); COMMENT ON COLUMN "quizes"."id" IS 'The quiz unique identifier'`);
        await queryRunner.query(`CREATE TABLE "questions" ("id" SERIAL NOT NULL, "question" character varying NOT NULL, "quizId" integer, CONSTRAINT "PK_08a6d4b0f49ff300bf3a0ca60ac" PRIMARY KEY ("id")); COMMENT ON COLUMN "questions"."quizId" IS 'The quiz unique identifier'`);
        await queryRunner.query(`ALTER TABLE "options" ADD CONSTRAINT "FK_46b668c49a6c4154d4643d875a5" FOREIGN KEY ("questionId") REFERENCES "questions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "questions" ADD CONSTRAINT "FK_35d54f06d12ea78d4842aed6b6d" FOREIGN KEY ("quizId") REFERENCES "quizes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "questions" DROP CONSTRAINT "FK_35d54f06d12ea78d4842aed6b6d"`);
        await queryRunner.query(`ALTER TABLE "options" DROP CONSTRAINT "FK_46b668c49a6c4154d4643d875a5"`);
        await queryRunner.query(`DROP TABLE "questions"`);
        await queryRunner.query(`DROP TABLE "quizes"`);
        await queryRunner.query(`DROP TABLE "options"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
    }
}
exports.First1656445797071 = First1656445797071;
//# sourceMappingURL=1656445797071-First.js.map