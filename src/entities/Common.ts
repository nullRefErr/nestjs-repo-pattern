import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
//import { User } from './User';
export abstract class Common extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @CreateDateColumn({ type: 'datetime', name: 'created_at' })
  createdAt: string;

  // @ManyToOne(type => User)
  // @JoinColumn({name:"created_by", referencedColumnName: "id"})
  @Column('int', { name: 'created_by' })
  createdBy: number;

  @UpdateDateColumn({ type: 'datetime', nullable: true, name: 'updated_at' })
  updatedAt: string;

  // @ManyToOne(type => User, {nullable : true})
  // @JoinColumn({name:"updated_by", referencedColumnName: "id"})
  @Column('int', { nullable: true, name: 'updated_by' })
  updatedBy?: number | null;

  @DeleteDateColumn({ type: 'datetime', name: 'deleted_at' })
  deletedAt: Date;
}
