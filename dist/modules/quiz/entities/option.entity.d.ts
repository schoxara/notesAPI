import { BaseEntity } from 'typeorm';
import { Question } from './question.entity';
export declare class Option extends BaseEntity {
    id: number;
    text: string;
    isCorrect: boolean;
    question: Question;
}
