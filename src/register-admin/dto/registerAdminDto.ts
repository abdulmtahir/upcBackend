import { IsString, IsEmail, IsPhoneNumber, IsStrongPassword, IsNumberString } from "class-validator";

export class registerAdminDto{

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsEmail()
    email: string;

    @IsPhoneNumber()
    phone: string;

    @IsStrongPassword()
    password: string;

    @IsString()
    image: string;

    @IsNumberString()
    role: string;


}