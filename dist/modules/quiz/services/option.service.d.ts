import { CreateOptionDto } from '../dto/create-option.dto';
import { Question } from '../entities/question.entity';
import { OptionRepository } from '../repositories/option.repository';
export declare class OptionService {
    private optionRepository;
    constructor(optionRepository: OptionRepository);
    creatOption(option: CreateOptionDto, question: Question): Promise<{
        text: string;
        isCorrect: boolean;
    } & import("../entities/option.entity").Option>;
}
