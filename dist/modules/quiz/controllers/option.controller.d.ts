import { CreateOptionDto } from '../dto/create-option.dto';
import { Option } from '../entities/option.entity';
import { OptionService } from '../services/option.service';
import { QuestionService } from '../services/question.service';
export declare class OptionController {
    private optionService;
    private questionService;
    constructor(optionService: OptionService, questionService: QuestionService);
    saveOptionToQuestion(createOption: CreateOptionDto): Promise<{
        question: import("../entities/question.entity").Question;
        createOption: CreateOptionDto;
        option: {
            text: string;
            isCorrect: boolean;
        } & Option;
    }>;
}
