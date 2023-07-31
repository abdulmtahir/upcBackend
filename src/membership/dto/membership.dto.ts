import { IsEmail, IsEnum, IsMimeType, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsPostalCode, IsString, MinLength, isNotEmpty } from "class-validator";
import { Gender } from "../gender.enum";

export class MemberShipDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3, {
        message: 'Title is too short',
      })
    first_name: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3, {
        message: 'Title is too short',
      })
    last_name: string;

    @IsMimeType()
    @IsNotEmpty()
    picture: string;

    @IsNumber() 
    @IsNotEmpty() 
    age: number;

    @IsEnum(Gender)
    @IsNotEmpty()
    @MinLength(4, {
        message: 'Title is too short',
      })
    gender: Gender;

    @IsEmail()
    @IsNotEmpty()
    @MinLength(10, {
        message: 'Title is too short',
      })
    email: string;

    @IsNumber()
    @IsNotEmpty()
    @MinLength(11, {
        message: 'Title is too short',
      })
    phone_number: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(4, {
        message: 'Title is too short',
      })
    country: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8, {
        message: 'Title is too short',
      })
    address_1: string;

    @IsString()
    @IsOptional()
    address_2: string;

    @IsPostalCode('any')
    @IsNotEmpty()
    postal_code: string;

    @IsString()
    @IsNotEmpty()
    city: string;

    @IsString()
    @IsNotEmpty()
    state: string;
}