import { ConflictException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { buildLeftJoinsConfig } from "../../database/joins/buildLeftJoinsConfig";
import { User } from "../user/user.entity";
import { CreateNoteDto } from "./dto/createNote.dto";
import { UpdateNoteDto } from "./dto/updateNote.dto";
import { Notes } from "./notes.entity";

@Injectable()
export class NotesService {
  async createNote(
    dto: CreateNoteDto,
    userId: string
  ): Promise<Notes | undefined> {
    // create user object
    const user = new User();
    user.id = userId;

    //create note object
    const note = new Notes();
    note.user = user;
    note.title = dto.title;
    note.description = dto.description;

    const saved = await note.save();
    return saved;
  }

  async getNotesById(noteId: string): Promise<Notes | undefined> {
    return await Notes.findOne(noteId, {
      join: {
        alias: "notes",
        leftJoinAndSelect: buildLeftJoinsConfig(Notes, "notes", {
          user: {},
        }),
      },
    });
  }

  async getMineNotes(userId: string): Promise<Notes[]> {
    return Notes.find({
      join: {
        alias: "notes",
        leftJoinAndSelect: buildLeftJoinsConfig(Notes, "notes", {
          user: {},
        }),
      },
      where: {
        user: { id: userId },
      },
    });
  }

  async getAllNotes(): Promise<Notes[] | undefined> {
    return Notes.find({ relations: ["user"] });
  }

  async updateNote(noteId: string, updateDto: UpdateNoteDto, userId) {
    const note = await this.getNotesById(noteId);
    this.validateNoteOwner(note, userId);
    if (updateDto?.title) {
      note.title = updateDto.title;
    }
    if (updateDto?.description) {
      note.description = updateDto.description;
    }
    return await note.save();
  }

  async deleteNote(noteId: string, userId: string): Promise<Notes | undefined> {
    const note = await this.getNotesById(noteId);
    if (!note) return undefined;
    this.validateNoteOwner(note, userId);
    return await note.remove();
  }

  // private/untils functions
  private validateNoteOwner(note: Notes, userId: string) {
    if (note.user.id != userId) {
      throw new ConflictException("Only owner can change note.");
    }
  }
}
