import {IsString, IsNumber} from 'class-validator';


export class createBlogDto{

    @IsString()
    category:string;

    @IsString()
    discription:string;

}