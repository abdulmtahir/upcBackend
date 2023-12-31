import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class QuickContact {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;
    
    @Column()
    email: string;

    @Column( { nullable: false } )
    message: string
}
