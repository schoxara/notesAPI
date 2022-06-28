import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUserCreds(email: string, password: string): Promise<any>;
    generateToken(user: any): {
        access_token: string;
    };
}
