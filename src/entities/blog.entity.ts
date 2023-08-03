import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Blog } from "./postBlog.entity";



@Entity("createBlog")
export class createBlog{

    @OneToMany(()=> Blog, blog => blog.categoryId, {cascade:true})
    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:false})
    category:string;

    @Column()
    discription:string;
}