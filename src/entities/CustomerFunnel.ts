import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Common } from './Common';
import { EventType } from './EventType';

@Entity('Customer_Funnel')
@ObjectType()
export class CustomerFunnel extends Common {
  constructor(
    customerId: number,
    eventTypeId: EventType,
    eventDescription: string,
    createdBy: number,
  ) {
    super();
    this.customerId = customerId;
    this.eventTypeId = eventTypeId;
    this.eventDescription = eventDescription;
    this.createdBy = createdBy;
  }
  @Field(() => Int)
  @Column('int', { name: 'customer_id' })
  customerId: number;

  @Field(() => Int)
  @ManyToOne(() => EventType)
  @JoinColumn({ name: 'event_type_id', referencedColumnName: 'id' })
  eventTypeId: EventType;

  @Field(() => String, { nullable: true })
  @Column('varchar', { nullable: true, name: 'event_description' })
  eventDescription: string;
}
