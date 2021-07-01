import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Common } from './Common';
import { User } from './User';
import { ActivityType } from './ActivityType';
import { PolymorphicChildren } from 'typeorm-polymorphic';
import { Relations } from './Relations';

@Entity('Activity')
export class Activity extends Common {
  constructor(
    //constructor as an example. will add the other constructors next
    name: string,
    customerId: number,
    assignee: User,
    typeId: ActivityType,
    activityTime: Date,
    countryId: number,
    description?: string,
  ) {
    super();
    this.name = name;
    this.description = description;
    this.customerId = customerId;
    this.assignee = assignee;
    this.typeId = typeId;
    this.activityTime = activityTime;
    this.customerId = customerId;
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

  @Column('int', { name: 'customer_id' })
  customerId: number;

  @ManyToOne((type) => User)
  @JoinColumn({ name: 'assignee_id', referencedColumnName: 'id' })
  assignee: User;

  @ManyToOne((type) => ActivityType)
  @JoinColumn({ name: 'type_id', referencedColumnName: 'id' })
  typeId: ActivityType;

  @Column('datetime', { name: 'activity_time' })
  activityTime: Date;

  @Column('int', { name: 'country_id' })
  countryId: number;
}
