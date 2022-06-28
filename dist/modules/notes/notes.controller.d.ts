import { CreateNoteDto } from "./dto/createNote.dto";
import { Notes } from "./notes.entity";
import { NotesService } from "./notes.service";
export declare class NotesController {
    private notesService;
    constructor(notesService: NotesService);
    getAllNotes(): Promise<Notes[]>;
    getById(id: string): Promise<Notes>;
    doUserRegistration(createDto: CreateNoteDto, req: any): Promise<Notes>;
    updateById(id: string, updateDto: CreateNoteDto, req: any): Promise<Notes>;
}
