"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const falso_1 = require("@ngneat/falso");
const typeorm_seeding_1 = require("typeorm-seeding");
const user_entity_1 = require("../../modules/user/user.entity");
(0, typeorm_seeding_1.define)(user_entity_1.User, () => {
    const user = new user_entity_1.User();
    user.name = (0, falso_1.randFullName)();
    user.email = (0, falso_1.randEmail)();
    user.password = (0, falso_1.randPassword)();
    return user;
});
//# sourceMappingURL=user.factory.js.map