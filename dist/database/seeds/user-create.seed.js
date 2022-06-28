"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateSeed = void 0;
const typeorm_1 = require("typeorm");
const user_enum_1 = require("../../modules/user/enums/user.enum");
const user_entity_1 = require("../../modules/user/user.entity");
class UserCreateSeed {
    async run(factory, connection) {
        await (0, typeorm_1.getManager)().query('TRUNCATE users');
        await factory(user_entity_1.User)().create({
            name: 'Amitav Roy',
            email: 'test@email.com',
            password: 'Tester1!',
            role: user_enum_1.UserRoles.ADMIN,
        });
    }
}
exports.UserCreateSeed = UserCreateSeed;
//# sourceMappingURL=user-create.seed.js.map