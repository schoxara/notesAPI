import { BaseEntity } from 'typeorm';
import { Question } from './question.entity';
export declare class Quiz extends BaseEntity {
    id: number;
    title: string;
    description: string;
    isActive: boolean;
    questions: Question[];
}
