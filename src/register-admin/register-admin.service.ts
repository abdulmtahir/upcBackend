import { Injectable } from '@nestjs/common';
import { registerAdminDto } from './dto/registerAdminDto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from 'src/entities/register-admin.entity';


@Injectable()
export class RegisterAdminService {

    constructor(@InjectRepository(Admin) private readonly adminRepo: Repository<Admin>,){}

    async registerAdmin(registerAdminDto: registerAdminDto){

        const admin = await this.adminRepo.create(registerAdminDto);

        return await this.adminRepo.save(admin);
    
    }
}
