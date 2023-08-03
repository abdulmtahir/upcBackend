import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { createBlog } from "./blog.entity";



@Entity("Blog")
export class Blog{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:true})
    headline:string;

    
    @Column({nullable:false})
    blog:string;

    @ManyToOne(()=> createBlog, user => user.id)
    categoryId:number;

    @Column()
    date:string;

    @Column()
    image:string;
}