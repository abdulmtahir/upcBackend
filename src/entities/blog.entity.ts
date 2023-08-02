import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity("createBlog")
export class createBlog{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    category:string;

    @Column()
    discription:string;
}