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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_utils_1 = require("../../app.utils");
const UuidPipe_1 = require("../../common/utils/UuidPipe");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const createNote_dto_1 = require("./dto/createNote.dto");
const notes_entity_1 = require("./notes.entity");
const notes_service_1 = require("./notes.service");
let NotesController = class NotesController {
    constructor(notesService) {
        this.notesService = notesService;
    }
    async getAllNotes() {
        return this.notesService.getAllNotes();
    }
    async getById(id) {
        return this.notesService.getNotesById(id);
    }
    async doUserRegistration(createDto, req) {
        return await this.notesService.createNote(createDto, req.user.id);
    }
    async updateById(id, updateDto, req) {
        return this.notesService.updateNote(id, updateDto, req.user.id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOkResponse)({ type: notes_entity_1.Notes }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "getAllNotes", null);
__decorate([
    (0, common_1.Get)("/:id"),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOkResponse)({ type: notes_entity_1.Notes }),
    (0, swagger_1.ApiNotFoundResponse)({ description: "Entity with given Id not found" }),
    __param(0, (0, common_1.Param)("id", UuidPipe_1.UuidPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "getById", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)("/create"),
    (0, swagger_1.ApiCreatedResponse)({
        description: "Created Note",
        type: notes_entity_1.Notes,
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Cannot create note. Try again!" }),
    __param(0, (0, common_1.Body)(app_utils_1.SETTINGS.VALIDATION_PIPE)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createNote_dto_1.CreateNoteDto, Object]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "doUserRegistration", null);
__decorate([
    (0, common_1.Patch)("/:id"),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOkResponse)({ type: notes_entity_1.Notes }),
    (0, swagger_1.ApiNotFoundResponse)({ description: "Entity with given Id not found" }),
    __param(0, (0, common_1.Param)("id", UuidPipe_1.UuidPipe)),
    __param(1, (0, common_1.Body)(app_utils_1.SETTINGS.VALIDATION_PIPE)),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, createNote_dto_1.CreateNoteDto, Object]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "updateById", null);
NotesController = __decorate([
    (0, swagger_1.ApiTags)("Notes"),
    (0, common_1.Controller)("notes"),
    __metadata("design:paramtypes", [notes_service_1.NotesService])
], NotesController);
exports.NotesController = NotesController;
//# sourceMappingURL=notes.controller.js.map