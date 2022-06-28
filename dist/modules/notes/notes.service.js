"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesService = void 0;
const common_1 = require("@nestjs/common");
const buildLeftJoinsConfig_1 = require("../../database/joins/buildLeftJoinsConfig");
const user_entity_1 = require("../user/user.entity");
const notes_entity_1 = require("./notes.entity");
let NotesService = class NotesService {
    async createNote(dto, userId) {
        const user = new user_entity_1.User();
        user.id = userId;
        const note = new notes_entity_1.Notes();
        note.user = user;
        note.title = dto.title;
        note.description = dto.description;
        const saved = await note.save();
        console.log(saved);
        return saved;
    }
    async getNotesById(noteId) {
        return notes_entity_1.Notes.findOneOrFail(noteId, {
            join: {
                alias: "notes",
                leftJoinAndSelect: (0, buildLeftJoinsConfig_1.buildLeftJoinsConfig)(notes_entity_1.Notes, "notes", {
                    user: {},
                }),
            },
        });
    }
    async getAllNotes() {
        return notes_entity_1.Notes.find();
    }
    async updateNote(noteId, updateDto, userId) {
        const note = await this.getNotesById(noteId);
        this.validateNoteOwner(note, userId);
        if (updateDto === null || updateDto === void 0 ? void 0 : updateDto.title) {
            note.title = updateDto.title;
        }
        if (updateDto === null || updateDto === void 0 ? void 0 : updateDto.description) {
            note.description = updateDto.description;
        }
        return await note.save();
    }
    validateNoteOwner(note, userId) {
        if (note.user.id != userId) {
            throw new common_1.ConflictException("Only owner can change note.");
        }
    }
};
NotesService = __decorate([
    (0, common_1.Injectable)()
], NotesService);
exports.NotesService = NotesService;
//# sourceMappingURL=notes.service.js.map