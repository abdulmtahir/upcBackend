import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Event {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    eventTitle: string;

    @Column()
    image: string;

    @Column()
    eventDescription: string;

    @CreateDateColumn()
    createAt: Date;

}
