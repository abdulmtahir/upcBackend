import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/signUp/user.service';
import * as bcrypt from 'bcrypt'
@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async validateUser(email: string, password: string) {
        const user = await this.userService.findUser(email);
        const isPasswordMatch = await bcrypt.compare(
            password,
            user.password
        );
        if (user && isPasswordMatch) {
            return user;
        }
        return null;
    }     

    async login(user: any) {
        const payload = { email: user.email, id: user.id, role: user.role };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}



 

// async validateUser(email: string, password: string): Promise<any> {
//     const user = await this.userService.findUser(email);
//     if (user && user.password == password) {
//         return user;
//     }
//     return null;
// }