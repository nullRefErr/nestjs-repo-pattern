import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Common } from './Common';
import { ActivityType } from './ActivityType';
import { PolymorphicChildren } from 'typeorm-polymorphic';
import { Relations } from './Relations';

@Entity('Activity')
export class Activity extends Common {
  constructor(
    name: string,
    customerId: number,
    typeId: ActivityType,
    activityTime: Date,
    countryId: number,
    createdBy: number,
    description?: string,
  ) {
    super();
    this.name = name;
    this.description = description ? description : '';
    this.customerId = customerId;
    this.typeId = typeId;
    this.activityTime = activityTime;
    this.customerId = customerId;
    this.countryId = countryId;
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

  @Column('int', { name: 'customer_id' })
  customerId: number;

  @ManyToOne(() => ActivityType)
  @JoinColumn({ name: 'type_id', referencedColumnName: 'id' })
  typeId: ActivityType;

  @Column('datetime', { name: 'activity_time' })
  activityTime: Date;

  @Column('int', { name: 'country_id' })
  countryId: number;
}
