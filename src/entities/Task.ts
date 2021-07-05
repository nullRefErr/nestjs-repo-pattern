import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { Common } from './Common';
import { User } from './User';
import { TaskType } from './TaskType';
import { PolymorphicChildren } from 'typeorm-polymorphic';
import { Relations } from './Relations';

export enum Status {
  TODO = '1',
  CLOSED = '0',
}
registerEnumType(Status, { name: 'Status' });

@Entity('Task')
@ObjectType()
export class Task extends Common {
  constructor(
    name: string,
    customerId: number,
    assignee: User,
    typeId: TaskType,
    countryId: number,
    status: Status,
    createdBy: number,
    startedTime: Date,
    closedTime?: Date,
    dueDate?: Date,
    description?: string,
  ) {
    super();
    this.name = name;
    this.description = description ? description : '';
    this.status = status;
    this.countryId = countryId;
    this.assignee = assignee;
    this.startedTime = startedTime;
    this.closedTime = closedTime;
    this.typeId = typeId;
    this.customerId = customerId;
    this.dueDate = dueDate;
    this.createdBy = createdBy;
  }
  @PolymorphicChildren(() => Relations, {
    eager: false,
    hasMany: true,
  })
  relations: Relations[];

  @Field(() => String)
  @Column('varchar')
  name: string;

  @Field(() => String, { nullable: true })
  @Column('varchar', { nullable: true })
  description: string;

  @Field(() => Status)
  @Column({
    type: 'enum',
    enum: Status,
    default: Status.TODO,
  })
  status: Status;

  @Field(() => Int, { nullable: true })
  @Column('int', { nullable: true, name: 'customer_id' })
  customerId: number;

  @Field(() => Int)
  @ManyToOne(() => User)
  @JoinColumn({ name: 'assignee_id', referencedColumnName: 'id' })
  assignee: User;

  @Field(() => Int)
  @ManyToOne(() => TaskType)
  @JoinColumn({ name: 'type_id', referencedColumnName: 'id' })
  typeId: TaskType;

  @Field()
  @Column('datetime', { name: 'started_time', default: () => new Date() })
  startedTime: Date;

  @Field({ nullable: true })
  @Column('datetime', { nullable: true, name: 'closed_time' })
  closedTime: Date;

  @Field({ nullable: true })
  @Column('datetime', { nullable: true, name: 'due_date' })
  dueDate: Date;

  @Field(() => Int)
  @Column('int', { name: 'country_id' })
  countryId: number;
}
