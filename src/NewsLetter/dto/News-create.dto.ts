import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateNewsDto {
    @IsString()
    @IsNotEmpty()
    first_name: string;

    @IsString()
    @IsNotEmpty()
    last_name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;
}