import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty } from "class-validator";

export class UpdateNoteDto {
  @ApiPropertyOptional({
    description: "Title of the noter",
    example: "Title",
  })
  @IsNotEmpty()
  title?: string;

  @ApiPropertyOptional({
    description: "Text of the note",
    example: "Hello World",
  })
  @IsNotEmpty()
  description?: string;
}
