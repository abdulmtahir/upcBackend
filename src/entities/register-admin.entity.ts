import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt'
import { Role } from "src/register-admin/role.enum";


@Entity("Admin")
export class Admin{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    firstName: string;

    @Column({nullable:false})
    lastName: string;

    @Column({unique:true, nullable:false})
    email: string;

    @Column({nullable:false, unique:true})
    phone: string;

    @Column({nullable:false})
    password:string;

    @Column({ type: 'enum', enum: Role, default: Role.Admin})
    role: Role;

    @Column({ nullable: false })
    image: string;

    @BeforeInsert()
    async hashpassword(){

        this.password = await bcrypt.hash(this.password,10);
    }

}