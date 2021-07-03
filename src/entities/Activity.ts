import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Common } from './Common';
import { ActivityType } from './ActivityType';
import { PolymorphicChildren } from 'typeorm-polymorphic';
import { Relations } from './Relations';

@Entity('Activity')
@ObjectType()
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

  @Field(() => String)
  @Column('varchar')
  name: string;

  @Field(() => String, { nullable: true })
  @Column('varchar', { nullable: true })
  description: string;

  @Field(() => Int)
  @Column('int', { name: 'customer_id' })
  customerId: number;

  @Field(() => Int)
  @ManyToOne(() => ActivityType)
  @JoinColumn({ name: 'type_id', referencedColumnName: 'id' })
  typeId: ActivityType;

  @Field()
  @Column('datetime', { name: 'activity_time' })
  activityTime: Date;

  @Field(() => Int)
  @Column('int', { name: 'country_id' })
  countryId: number;
}
