import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { User } from './user.entity';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    doUserRegistration(userRegister: UserRegisterRequestDto): Promise<User>;
}
