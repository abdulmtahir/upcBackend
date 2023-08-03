// membership.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Gender } from '../gender.enum';

@Entity()
export class MembershipEntity {
  @PrimaryGeneratedColumn({ type: 'bigint'})
  id: number;

  @Column({ nullable: false })
  first_name: string;

  @Column({ nullable: false })
  last_name: string;

  @Column({ nullable: false })
  picture: string;

  @Column({ nullable: false })
  age: number;

  @Column({ type: 'enum', enum: Gender})
  gender: Gender;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  phone_number: number;

  @Column({ nullable: false })
  country: string;

  @Column({ nullable: false })
  address_1: string;

  @Column({ nullable: true })
  address_2: string;

  @Column({ nullable: false })
  postal_code: string;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: false })
  state: string;

  @CreateDateColumn({ type: 'timestamp'})
    created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  updated_at: Date;
}
