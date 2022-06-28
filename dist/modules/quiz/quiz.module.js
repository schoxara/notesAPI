"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const question_controller_1 = require("./controllers/question.controller");
const question_repository_1 = require("./repositories/question.repository");
const question_service_1 = require("./services/question.service");
const quiz_controller_1 = require("./controllers/quiz.controller");
const quiz_repository_1 = require("./repositories/quiz.repository");
const quiz_service_1 = require("./services/quiz.service");
const option_repository_1 = require("./repositories/option.repository");
const option_controller_1 = require("./controllers/option.controller");
const option_service_1 = require("./services/option.service");
const user_module_1 = require("../user/user.module");
const response_controller_1 = require("./controllers/response.controller");
const response_service_1 = require("./services/response.service");
let QuizModule = class QuizModule {
};
QuizModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            quiz_controller_1.QuizController,
            question_controller_1.QuestionController,
            option_controller_1.OptionController,
            response_controller_1.ResponseController,
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                quiz_repository_1.QuizRepository,
                question_repository_1.QuestionRepository,
                option_repository_1.OptionRepository,
            ]),
            user_module_1.UserModule,
        ],
        providers: [quiz_service_1.QuizService, question_service_1.QuestionService, option_service_1.OptionService, response_service_1.ResponseService],
    })
], QuizModule);
exports.QuizModule = QuizModule;
//# sourceMappingURL=quiz.module.js.map