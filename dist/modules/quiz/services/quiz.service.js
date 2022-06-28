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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizService = void 0;
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const event_constants_1 = require("../../../common/constants/event.constants");
const response_add_event_1 = require("../events/response-add.event");
const quiz_repository_1 = require("../repositories/quiz.repository");
let QuizService = class QuizService {
    constructor(quizRepository) {
        this.quizRepository = quizRepository;
    }
    async getAllQuiz() {
        return await this.quizRepository
            .createQueryBuilder('q')
            .leftJoinAndSelect('q.questions', 'qt')
            .getMany();
    }
    async paginate(options) {
        const qb = this.quizRepository.createQueryBuilder('q');
        qb.orderBy('q.id', 'DESC');
        return (0, nestjs_typeorm_paginate_1.paginate)(qb, options);
    }
    async getQuizById(id) {
        return await this.quizRepository.findOne(id, {
            relations: ['questions', 'questions.options'],
        });
    }
    async createNewQuiz(quiz) {
        return await this.quizRepository.save(quiz);
    }
    checkQuizCompeleted(payload) {
        console.log('checkQuizCompeleted', payload);
    }
};
__decorate([
    (0, event_emitter_1.OnEvent)(event_constants_1.events.RESPONSE_SUBMITTED),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [response_add_event_1.ResponseAddEvent]),
    __metadata("design:returntype", void 0)
], QuizService.prototype, "checkQuizCompeleted", null);
QuizService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(quiz_repository_1.QuizRepository)),
    __metadata("design:paramtypes", [quiz_repository_1.QuizRepository])
], QuizService);
exports.QuizService = QuizService;
//# sourceMappingURL=quiz.service.js.map