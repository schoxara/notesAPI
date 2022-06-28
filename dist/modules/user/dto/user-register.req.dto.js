"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegisterRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const app_utils_1 = require("../../../app.utils");
class UserRegisterRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The name of the User',
        example: 'Jhon Doe',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserRegisterRequestDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The email address of the User',
        example: 'jhon.doe@gmail.com',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserRegisterRequestDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The password of the User',
        example: 'Password@123',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(8, 24),
    (0, class_validator_1.Matches)(app_utils_1.REGEX.PASSWORD_RULE, { message: app_utils_1.MESSAGES.PASSWORD_RULE_MESSAGE }),
    __metadata("design:type", String)
], UserRegisterRequestDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Confirm the password',
        example: 'Password@123',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(8, 24),
    (0, class_validator_1.Matches)(app_utils_1.REGEX.PASSWORD_RULE, { message: app_utils_1.MESSAGES.PASSWORD_RULE_MESSAGE }),
    __metadata("design:type", String)
], UserRegisterRequestDto.prototype, "confirm", void 0);
exports.UserRegisterRequestDto = UserRegisterRequestDto;
//# sourceMappingURL=user-register.req.dto.js.map