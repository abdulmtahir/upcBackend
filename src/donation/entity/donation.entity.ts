// donation.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class DonationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  age: number;

  @Column()
  email: string;

  @Column()
  phone_number: string;

  @Column()
  country: string;

  @Column()
  address: string;

  @Column()
  postal_code: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  frequency: string;

  @Column()
  amount: number;

  @CreateDateColumn({})
  created_at: Date;

  @UpdateDateColumn({})
  updated_at: Date;

//   @ManyToOne(() => MemberShipEntity, memberShipEntity =>  memberShipEntity.id, { onDelete: 'CASCADE'})
//   @JoinColumn()
//   user: MemberShipEntity;
}
