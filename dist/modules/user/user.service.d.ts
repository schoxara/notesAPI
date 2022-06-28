import { UserRegisterRequestDto } from "./dto/user-register.req.dto";
import { User } from "./user.entity";
export declare class UserService {
    doUserRegistration(userRegister: UserRegisterRequestDto): Promise<User>;
    getUserByEmail(email: string): Promise<User | undefined>;
    getUserById(id: number): Promise<User | undefined>;
}
