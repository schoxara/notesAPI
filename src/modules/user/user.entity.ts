import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import * as bcrypt from "bcrypt";
import { ApiProperty } from "@nestjs/swagger";
import { UserRoles } from "./enums/user.enum";
import { Notes } from "../notes/notes.entity";

@Entity({ name: "users" })
export class User extends BaseEntity {

  @ApiProperty({ description: "Primary key as User ID" })
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ApiProperty({ description: "User name", example: "Jhon Doe" })
  @Column()
  name: string;

  @ApiProperty({
    description: "User email address",
    example: "jhon.doe@gmail.com",
  })
  @Column({
    unique: true,
  })
  email: string;

  @ApiProperty({ description: "Hashed user password" })
  @Column()
  password: string;

  @Column({ type: "enum", enum: UserRoles, default: UserRoles.MEMBER })
  role: UserRoles;

  @OneToMany((type) => Notes, (note) => note.user)
  notes: Notes[];

  @ApiProperty({ description: "When user was created" })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: "When user was updated" })
  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  async setPassword(password: string) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password, salt);
  }
}
