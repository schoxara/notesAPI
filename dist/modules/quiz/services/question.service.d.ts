import { CreateQuestionDto } from '../dto/create-question.dto';
import { Question } from '../entities/question.entity';
import { QuestionRepository } from '../repositories/question.repository';
import { Quiz } from '../entities/quiz.entity';
export declare class QuestionService {
    private questionRepository;
    constructor(questionRepository: QuestionRepository);
    findQuestionById(id: number): Promise<Question>;
    createQuestion(question: CreateQuestionDto, quiz: Quiz): Promise<Question>;
}
