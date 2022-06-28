import { EventEmitter2 } from '@nestjs/event-emitter';
export declare class ResponseController {
    private eventEmitter;
    constructor(eventEmitter: EventEmitter2);
    handleQuestionResponse(): Promise<{
        message: string;
    }>;
}
