import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BlogEntity } from "./blog.entity";



@Entity("Blog")
export class Blog{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:true})
    headline:string;

    
    @Column({nullable:false})
    blog:string;

    @ManyToOne(()=> BlogEntity, user => user.id)
    categoryId:number;

    @Column()
    date:string;

    @Column()
    image:string;
}