import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { registerAdminDto } from './dto/registerAdminDto';
import { RegisterAdminService } from './register-admin.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guards';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from './role.enum';

@Controller('register-admin')
export class RegisterAdminController {

    constructor(private readonly RegisterAdminService: RegisterAdminService){}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Super)
    @Post()
    registerAdmin(@Body() registerAdminDto: registerAdminDto){
       return this.RegisterAdminService.registerAdmin(registerAdminDto);
    }
}
