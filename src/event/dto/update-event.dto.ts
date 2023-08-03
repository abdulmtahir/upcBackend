import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDto } from './create-event.dto';
import { IsString, IsDate } from 'class-validator';

export class UpdateEventDto extends PartialType(CreateEventDto) {

    @IsString()
    eventTitle: string;

    @IsString()
    image: string;

    @IsString()
    eventDescription: string;

    @IsDate()
    date: Date;
}
