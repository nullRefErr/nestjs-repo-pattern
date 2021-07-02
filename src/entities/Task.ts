import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Common } from './Common';
import { User } from './User';
import { TaskType } from './TaskType';
import { PolymorphicChildren } from 'typeorm-polymorphic';
import { Relations } from './Relations';

export enum Status {
  TODO = 1,
  CLOSED = 0,
}

@Entity('Task')
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

  @Column('varchar')
  name: string;

  @Column('varchar', { nullable: true })
  description: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.TODO,
  })
  status: Status;

  @Column('int', { nullable: true, name: 'customer_id' })
  customerId: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'reporter_id', referencedColumnName: 'id' })
  reporter: User;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'assignee_id', referencedColumnName: 'id' })
  assignee: User;

  @ManyToOne(() => TaskType)
  @JoinColumn({ name: 'type_id', referencedColumnName: 'id' })
  typeId: TaskType;

  @Column('datetime', { name: 'started_time' })
  startedTime: Date;

  @Column('datetime', { nullable: true, name: 'closed_time' })
  closedTime: Date;

  @Column('datetime', { nullable: true, name: 'due_date' })
  dueDate: Date;

  @Column('int', { name: 'country_id' })
  countryId: number;
}
