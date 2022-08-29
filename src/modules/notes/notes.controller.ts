import {
  BadRequestException,
  Body,
  Controller,
  Delete,
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
import { SendNotifiationDTO } from "src/mqtt/dto/sendNotification.dto";
import { MqttService } from "src/mqtt/mqtt.service";
import { SETTINGS } from "../../app.utils";
import { UuidPipe } from "../../common/utils/UuidPipe";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { CreateNoteDto } from "./dto/createNote.dto";
import { Notes } from "./notes.entity";
import { NotesService } from "./notes.service";

@ApiTags("Notes")
@Controller("notes")
export class NotesController {
  constructor(
    private notesService: NotesService,
    private mqttService: MqttService,
  ) { }

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: Notes })
  async getAllNotes() {
    return await this.notesService.getAllNotes();
  }

  @Get("/:id")
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: Notes })
  @ApiNotFoundResponse({ description: "Entity with given Id not found" })
  async getById(@Param("id", UuidPipe) id: string) {
    const note = await this.notesService.getNotesById(id);
    return note ? note : new BadRequestException("Not Found")
  }

  @Get("/personal/mine")
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: Notes })
  @ApiNotFoundResponse({ description: "Entity with given Id not found" })
  async getMin(@Request() req) {
    return await this.notesService.getMineNotes(req.user.id);
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

    const a = await this.notesService.createNote(createDto, req.user.id);
    const data = new SendNotifiationDTO();
    data.message = "Refresh";
    this.mqttService.sendMessageToTopic(data);
    return a;
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

  @Delete("/:id")
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: Notes })
  @ApiNotFoundResponse({ description: "Entity with given Id not found" })
  async deleteById(
    @Param("id", UuidPipe) id: string,
    @Request() req
  ) {
    const note = await this.notesService.deleteNote(id, req.user.id);
    return note ? note : new BadRequestException("Not Found")

  }
}
