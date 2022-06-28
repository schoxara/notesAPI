import { CreateQuestionDto } from '../dto/create-question.dto';
import { Question } from '../entities/question.entity';
import { QuestionService } from '../services/question.service';
import { QuizService } from '../services/quiz.service';
export declare class QuestionController {
    private questionService;
    private quizService;
    constructor(questionService: QuestionService, quizService: QuizService);
    saveQuestion(question: CreateQuestionDto): Promise<Question>;
}
