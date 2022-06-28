import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from "@nestjs/swagger";
import { SETTINGS } from "../../app.utils";
import { UuidPipe } from "../../common/utils/UuidPipe";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { CreateNoteDto } from "./dto/createNote.dto";
import { Notes } from "./notes.entity";
import { NotesService } from "./notes.service";

@ApiTags("Notes")
@Controller("notes")
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: Notes })
  async getAllNotes() {
    return this.notesService.getAllNotes();
  }

  @Get("/:id")
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: Notes })
  @ApiNotFoundResponse({ description: "Entity with given Id not found" })
  async getById(@Param("id", UuidPipe) id: string) {
    return this.notesService.getNotesById(id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post("/create")
  @ApiCreatedResponse({
    description: "Created Note",
    type: Notes,
  })
  @ApiBadRequestResponse({ description: "Cannot create note. Try again!" })
  async doUserRegistration(
    @Body(SETTINGS.VALIDATION_PIPE)
    createDto: CreateNoteDto,
    @Request() req
  ): Promise<Notes> {
    return await this.notesService.createNote(createDto, req.user.id);
  }

  @Patch("/:id")
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: Notes })
  @ApiNotFoundResponse({ description: "Entity with given Id not found" })
  async updateById(
    @Param("id", UuidPipe) id: string,
    @Body(SETTINGS.VALIDATION_PIPE)
    updateDto: CreateNoteDto,
    @Request() req
  ) {
    return this.notesService.updateNote(id, updateDto, req.user.id);
  }
}
