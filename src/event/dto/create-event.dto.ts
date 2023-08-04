import { IsDate, IsString } from "class-validator";

export class CreateEventDto {
    @IsString()
    eventTitle: string;

    @IsString()
    image: string;

    @IsString()
    eventDescription: string;

    @IsDate()
    date: Date;

}
