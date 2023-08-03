import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class News {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column({unique: true})
    email: string;
}