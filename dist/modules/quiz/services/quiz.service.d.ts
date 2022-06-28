import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { CreateQuizDto } from '../dto/create-quiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { ResponseAddEvent } from '../events/response-add.event';
import { QuizRepository } from '../repositories/quiz.repository';
export declare class QuizService {
    private quizRepository;
    constructor(quizRepository: QuizRepository);
    getAllQuiz(): Promise<Quiz[]>;
    paginate(options: IPaginationOptions): Promise<Pagination<Quiz>>;
    getQuizById(id: number): Promise<Quiz>;
    createNewQuiz(quiz: CreateQuizDto): Promise<CreateQuizDto & Quiz>;
    checkQuizCompeleted(payload: ResponseAddEvent): void;
}
