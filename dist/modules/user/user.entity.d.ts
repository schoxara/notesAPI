import { BaseEntity } from "typeorm";
import { UserRoles } from "./enums/user.enum";
import { Notes } from "../notes/notes.entity";
export declare class User extends BaseEntity {
    id: string;
    name: string;
    email: string;
    password: string;
    role: UserRoles;
    notes: Notes[];
    createdAt: Date;
    updatedAt: Date;
    setPassword(password: string): Promise<void>;
}
