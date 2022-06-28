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
exports.Question = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const option_entity_1 = require("./option.entity");
const quiz_entity_1 = require("./quiz.entity");
let Question = class Question extends typeorm_1.BaseEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The primary ID of question.',
        example: 1,
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Question.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The actual question',
        example: 'What is the question?',
    }),
    (0, typeorm_1.Column)({
        type: 'varchar',
    }),
    __metadata("design:type", String)
], Question.prototype, "question", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Quiz of the question',
    }),
    (0, typeorm_1.ManyToOne)(() => quiz_entity_1.Quiz, (quiz) => quiz.questions),
    __metadata("design:type", quiz_entity_1.Quiz)
], Question.prototype, "quiz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Options of the question',
    }),
    (0, typeorm_1.OneToMany)(() => option_entity_1.Option, (option) => option.question),
    __metadata("design:type", Array)
], Question.prototype, "options", void 0);
Question = __decorate([
    (0, typeorm_1.Entity)('questions')
], Question);
exports.Question = Question;
//# sourceMappingURL=question.entity.js.map