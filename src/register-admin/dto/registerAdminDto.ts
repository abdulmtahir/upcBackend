import { IsString, IsEmail, IsPhoneNumber, IsStrongPassword, IsNumberString, IsEnum, IsAlphanumeric, MaxLength, MinLength, NotContains, IsNotEmpty } from "class-validator";
import { Role } from '../role.enum'
export class registerAdminDto{

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsPhoneNumber()
    phone: string;

    @IsString()
    @IsAlphanumeric()
    @MaxLength(10, { message: 'Maxium length is 10'})
    @MinLength(8, { message:'Minium lenght is 8'})
    @NotContains(" ", { message: "No spaces allowed"})
    password: string;

    @IsString()
    image: string;

    @IsEnum(Role)
    role: Role;


}