import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
//import { User } from './User';
@ObjectType()
export abstract class Common extends BaseEntity {

  @Field(() => Int)
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Field()
  @CreateDateColumn({ type: 'datetime', name: 'created_at' })
  createdAt: Date;

  // @ManyToOne(type => User)
  // @JoinColumn({name:"created_by", referencedColumnName: "id"})
  @Field(() => Int)
  @Column('int', { name: 'created_by' })
  createdBy: number;

  @Field({ nullable: true })
  @UpdateDateColumn({ type: 'datetime', nullable: true, name: 'updated_at' })
  updatedAt: Date;

  // @ManyToOne(type => User, {nullable : true})
  // @JoinColumn({name:"updated_by", referencedColumnName: "id"})
  @Field(() => Int, { nullable: true })
  @Column('int', { nullable: true, name: 'updated_by' })
  updatedBy?: number | null;

  @Field()
  @DeleteDateColumn({ type: 'datetime', name: 'deleted_at' })
  deletedAt: Date;
}
