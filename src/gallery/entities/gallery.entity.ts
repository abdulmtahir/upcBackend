import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


export enum Catelog {
    ALL_WORK = "all",
    CAMPAIGN= "campaign",
    EVENT ="event",
    SPEECH = "speech",
    VOTES = "votes",
}

@Entity()
export class Gallery {

    @PrimaryGeneratedColumn()
    id: number;

    @Column( { 
        type: 'enum',
        enum: Catelog,
        default: Catelog.ALL_WORK
     } )
    catelog: Catelog;

    @Column()
    image: string;

    @Column()
    eventId: number;
}
