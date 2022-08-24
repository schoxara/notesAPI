import { Module } from "@nestjs/common";
import { MqttModule } from "src/mqtt/mqtt.module";
import { NotesController } from "./notes.controller";
import { NotesService } from "./notes.service";

@Module({
  imports: [MqttModule],
  controllers: [NotesController],
  providers: [NotesService],
  exports: [NotesService],
})
export class NotesModule { }
