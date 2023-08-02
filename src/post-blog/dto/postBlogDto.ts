import {IsString,  IsNumber} from 'class-validator'

export class postBlogDto{

    @IsString()
    id:number;

    @IsString()
    headline:string;

    @IsString()
    blog:string;

    @IsString()
    date:string;

    @IsString()
    image:string;
}