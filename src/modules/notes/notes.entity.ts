import { Controller } from "@nestjs/common";
import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { IsNotEmpty, MinLength } from "class-validator";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "../user/user.entity";

@Entity({ name: "notes" })
@ApiTags("Notes")
@Controller("notes")
export class Notes extends BaseEntity {
  @ApiProperty({ description: "Primary key as User ID" })
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ApiProperty()
  @Column()
  @IsNotEmpty()
  @MinLength(1)
  title: string;

  @ApiProperty()
  @Column()
  @IsNotEmpty()
  @MinLength(1)
  description: string;

  @ManyToOne((type) => User, (user) => user.notes)
  user: User;

  @ApiProperty({ description: "When note was created" })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: "When note was updated" })
  @UpdateDateColumn()
  updatedAt: Date;
}
