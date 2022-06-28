import { BaseEntity } from "typeorm";
import { User } from "../user/user.entity";
export declare class Notes extends BaseEntity {
    id: string;
    title: string;
    description: string;
    user: User;
    createdAt: Date;
    updatedAt: Date;
}
