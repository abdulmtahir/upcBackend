import { Body, Controller, Param, Post } from '@nestjs/common';
import { registerAdminDto } from './dto/registerAdminDto';
import { RegisterAdminService } from './register-admin.service';

@Controller('register-admin')
export class RegisterAdminController {

    constructor(private readonly RegisterAdminService: RegisterAdminService){}

    @Post()
    registerAdmin(@Body() registerAdminDto: registerAdminDto){
       return this.RegisterAdminService.registerAdmin(registerAdminDto);
    }
}
