"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseController = void 0;
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const swagger_1 = require("@nestjs/swagger");
const event_constants_1 = require("../../../common/constants/event.constants");
const response_add_event_1 = require("../events/response-add.event");
let ResponseController = class ResponseController {
    constructor(eventEmitter) {
        this.eventEmitter = eventEmitter;
    }
    async handleQuestionResponse() {
        console.log('This is inside the controller');
        const payload = new response_add_event_1.ResponseAddEvent();
        payload.userId = 1;
        payload.optionId = 33;
        this.eventEmitter.emit(event_constants_1.events.RESPONSE_SUBMITTED, payload);
        return { message: 'Response taken' };
    }
};
__decorate([
    (0, common_1.Post)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ResponseController.prototype, "handleQuestionResponse", null);
ResponseController = __decorate([
    (0, common_1.Controller)('/response'),
    (0, swagger_1.ApiTags)('Response'),
    __metadata("design:paramtypes", [event_emitter_1.EventEmitter2])
], ResponseController);
exports.ResponseController = ResponseController;
//# sourceMappingURL=response.controller.js.map