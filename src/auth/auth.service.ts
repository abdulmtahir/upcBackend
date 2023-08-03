import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import { RegisterAdminService } from 'src/register-admin/register-admin.service';
@Injectable()
export class AuthService {
    constructor(
        private registerAdmin: RegisterAdminService,
        private jwtService: JwtService
    ) {}

    async validateUser(email: string, password: string) {
        const user = await this.registerAdmin.findUser(email);
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