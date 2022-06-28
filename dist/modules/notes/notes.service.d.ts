import { CreateNoteDto } from "./dto/createNote.dto";
import { UpdateNoteDto } from "./dto/updateNote.dto";
import { Notes } from "./notes.entity";
export declare class NotesService {
    createNote(dto: CreateNoteDto, userId: string): Promise<Notes | undefined>;
    getNotesById(noteId: string): Promise<Notes | undefined>;
    getAllNotes(): Promise<Notes[] | undefined>;
    updateNote(noteId: string, updateDto: UpdateNoteDto, userId: any): Promise<Notes>;
    private validateNoteOwner;
}
