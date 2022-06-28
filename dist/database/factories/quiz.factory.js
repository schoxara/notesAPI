"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const falso_1 = require("@ngneat/falso");
const typeorm_seeding_1 = require("typeorm-seeding");
const quiz_entity_1 = require("../../modules/quiz/entities/quiz.entity");
(0, typeorm_seeding_1.define)(quiz_entity_1.Quiz, () => {
    const quiz = new quiz_entity_1.Quiz();
    quiz.title = (0, falso_1.randSentence)();
    quiz.description = (0, falso_1.randParagraph)();
    return quiz;
});
//# sourceMappingURL=quiz.factory.js.map