"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserRoleColumn1651075479367 = void 0;
class addUserRoleColumn1651075479367 {
    constructor() {
        this.name = 'addUserRoleColumn1651075479367';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`role\` enum ('admin', 'member') NOT NULL DEFAULT 'member'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`role\``);
    }
}
exports.addUserRoleColumn1651075479367 = addUserRoleColumn1651075479367;
//# sourceMappingURL=1651075479367-add_user_role_column.js.map