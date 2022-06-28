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
exports.Option = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const question_entity_1 = require("./question.entity");
let Option = class Option extends typeorm_1.BaseEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Primary key as Option ID', example: 1 }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Option.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The actual option', example: 'Owl' }),
    (0, typeorm_1.Column)({
        type: 'varchar',
    }),
    __metadata("design:type", String)
], Option.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether option is correct', example: true }),
    (0, typeorm_1.Column)({
        type: 'boolean',
    }),
    __metadata("design:type", Boolean)
], Option.prototype, "isCorrect", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => question_entity_1.Question, (question) => question.options),
    __metadata("design:type", question_entity_1.Question)
], Option.prototype, "question", void 0);
Option = __decorate([
    (0, typeorm_1.Entity)('options')
], Option);
exports.Option = Option;
//# sourceMappingURL=option.entity.js.map