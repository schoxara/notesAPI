"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupData = void 0;
const typeorm_1 = require("typeorm");
const option_entity_1 = require("../../modules/quiz/entities/option.entity");
const question_entity_1 = require("../../modules/quiz/entities/question.entity");
const quiz_entity_1 = require("../../modules/quiz/entities/quiz.entity");
const quiz_data_1 = require("../data/quiz.data");
class SetupData {
    async run(factory, connection) {
        console.log('quizSampleData', quiz_data_1.quizSampleData);
        await (0, typeorm_1.getManager)().query('SET foreign_key_checks = 0');
        await (0, typeorm_1.getManager)().query('TRUNCATE quizes');
        await (0, typeorm_1.getManager)().query('TRUNCATE questions');
        await (0, typeorm_1.getManager)().query('TRUNCATE options');
        await (0, typeorm_1.getManager)().query('SET foreign_key_checks = 1');
        for (let i = 0; i < quiz_data_1.quizSampleData.length; i++) {
            const { quizTitle, quizDescription, questions } = quiz_data_1.quizSampleData[i];
            const quiz = new quiz_entity_1.Quiz();
            quiz.title = quizTitle;
            quiz.description = quizDescription;
            await quiz.save();
            for (let j = 0; j < questions.length; j++) {
                const { question, options } = questions[j];
                const que = new question_entity_1.Question();
                que.question = question;
                que.quiz = quiz;
                await que.save();
                for (let k = 0; k < options.length; k++) {
                    const { isCorrect, text } = options[k];
                    const opt = new option_entity_1.Option();
                    opt.isCorrect = isCorrect;
                    opt.text = text;
                    opt.question = que;
                    await opt.save();
                }
            }
        }
    }
}
exports.SetupData = SetupData;
//# sourceMappingURL=setup-data.seed.js.map