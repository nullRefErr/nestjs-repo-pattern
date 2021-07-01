import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Common } from './Common';
import { EventType } from './EventType';

@Entity('Customer_Funnel')
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
  @Column('int', { name: 'customer_id' })
  customerId: number;

  @ManyToOne(() => EventType)
  @JoinColumn({ name: 'event_type_id', referencedColumnName: 'id' })
  eventTypeId: EventType;

  @Column('varchar', { nullable: true, name: 'event_description' })
  eventDescription: string;
}
