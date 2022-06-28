import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty } from "class-validator";

export class CreateNoteDto {
  @ApiProperty({
    description: "Title of the noter",
    example: "Title",
  })
  @IsNotEmpty()
  @IsDefined()
  title: string;

  @ApiProperty({
    description: "Text of the note",
    example: "Hello World",
  })
  @IsNotEmpty()
  @IsDefined()
  description: string;
}
