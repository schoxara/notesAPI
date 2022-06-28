import { Pagination } from 'nestjs-typeorm-paginate';
import { CreateQuizDto } from '../dto/create-quiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { QuizService } from '../services/quiz.service';
export declare class QuizController {
    private quizService;
    constructor(quizService: QuizService);
    getAllQuiz(page?: number, limit?: number): Promise<Pagination<Quiz>>;
    getQuizById(id: number): Promise<Quiz>;
    createQuiz(quizData: CreateQuizDto): Promise<Quiz>;
}
