import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


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

    @CreateDateColumn({ type: 'timestamp'})
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    updatedAt: Date;
}
