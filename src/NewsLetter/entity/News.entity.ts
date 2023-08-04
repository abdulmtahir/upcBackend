import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class News {
    @PrimaryGeneratedColumn()
    id: number;

    @Column( {nullable: false} )
    first_name: string;

    @Column( { nullable: false} )
    last_name: string;

    @Column({unique: true, nullable: false})
    email: string;
}