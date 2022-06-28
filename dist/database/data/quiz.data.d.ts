interface ISampleData {
    quizTitle: string;
    quizDescription: string;
    questions: Array<IQuestionData>;
}
interface IQuestionData {
    question: string;
    options: Array<{
        text: string;
        isCorrect: boolean;
    }>;
}
export declare const quizSampleData: Array<ISampleData>;
export {};
