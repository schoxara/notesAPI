import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from "@nestjs/common";
import { isUUID } from "class-validator";

@Injectable()
export class UuidPipe implements PipeTransform<string> {
  transform(value: string, metadata: ArgumentMetadata): string {
    if (isUUID(value)) {
      return value;
    }
    throw new BadRequestException([
      "Validation failed (UUID string is expected)",
    ]);
  }
}
