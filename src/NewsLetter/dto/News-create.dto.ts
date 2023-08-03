import { IsEmail, IsNumber, IsString } from "class-validator";

export class CreateNewsDto {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsEmail()
    email: string;
}