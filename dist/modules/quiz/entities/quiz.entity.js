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
exports.Quiz = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const question_entity_1 = require("./question.entity");
let Quiz = class Quiz extends typeorm_1.BaseEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Primary key as Quiz ID', example: 1 }),
    (0, typeorm_1.PrimaryGeneratedColumn)({
        comment: 'The quiz unique identifier',
    }),
    __metadata("design:type", Number)
], Quiz.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Title of the quiz',
        example: 'Sample Laravel quiz',
    }),
    (0, typeorm_1.Column)({
        type: 'varchar',
    }),
    __metadata("design:type", String)
], Quiz.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Description of the quiz',
        example: 'Lorem ipsum',
    }),
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], Quiz.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Quiz active or inactive state',
        example: true,
    }),
    (0, typeorm_1.Column)({
        type: 'boolean',
        default: 1,
    }),
    __metadata("design:type", Boolean)
], Quiz.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of questions',
    }),
    (0, typeorm_1.OneToMany)(() => question_entity_1.Question, (question) => question.quiz),
    __metadata("design:type", Array)
], Quiz.prototype, "questions", void 0);
Quiz = __decorate([
    (0, typeorm_1.Entity)('quizes')
], Quiz);
exports.Quiz = Quiz;
//# sourceMappingURL=quiz.entity.js.map