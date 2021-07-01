import { Entity, Column } from 'typeorm';
import { Common } from './Common';

@Entity('Activity_Type')
export class ActivityType extends Common {
  @Column('varchar')
  name: string;

  @Column('varchar')
  icon: string;
}
