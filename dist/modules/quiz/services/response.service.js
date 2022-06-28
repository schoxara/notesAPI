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
exports.ResponseService = void 0;
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const event_constants_1 = require("../../../common/constants/event.constants");
const response_add_event_1 = require("../events/response-add.event");
let ResponseService = class ResponseService {
    handleIfResponseIsCorrect(payload) {
        console.log('handleIfResponseIsCorrect', payload);
    }
};
__decorate([
    (0, event_emitter_1.OnEvent)(event_constants_1.events.RESPONSE_SUBMITTED),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [response_add_event_1.ResponseAddEvent]),
    __metadata("design:returntype", void 0)
], ResponseService.prototype, "handleIfResponseIsCorrect", null);
ResponseService = __decorate([
    (0, common_1.Injectable)()
], ResponseService);
exports.ResponseService = ResponseService;
//# sourceMappingURL=response.service.js.map