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
exports.Notes = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../user/user.entity");
let Notes = class Notes extends typeorm_1.BaseEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Primary key as User ID" }),
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Notes.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], Notes.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], Notes.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => user_entity_1.User, (user) => user.notes),
    __metadata("design:type", user_entity_1.User)
], Notes.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "When note was created" }),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Notes.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "When note was updated" }),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Notes.prototype, "updatedAt", void 0);
Notes = __decorate([
    (0, typeorm_1.Entity)({ name: "notes" }),
    (0, swagger_1.ApiTags)("Notes"),
    (0, common_1.Controller)("notes")
], Notes);
exports.Notes = Notes;
//# sourceMappingURL=notes.entity.js.map