import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsString } from "class-validator";

export class SendNotifiationDTO {
  @ApiProperty({
    description: "MQTT Message",
    example: "Hello world!",
  })
  @IsNotEmpty()
  @IsDefined()
  @IsString()
  message: string;
}
