import { IsEmail, IsNumber, IsString } from "class-validator";

export class UpdateNewsDto {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsEmail()
    email: string;
}