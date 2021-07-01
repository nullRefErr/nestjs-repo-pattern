import { Entity, Column } from 'typeorm';
import { Common } from './Common';

@Entity('Event_Type')
export class EventType extends Common {
  @Column('varchar')
  name: string;

  @Column('varchar')
  icon: string;
}
