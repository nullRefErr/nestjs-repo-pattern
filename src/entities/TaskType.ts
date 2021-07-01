import { Entity, Column } from 'typeorm';
import { Common } from './Common';

@Entity('Task_Type')
export class TaskType extends Common {
  @Column('varchar')
  name: string;

  @Column('varchar')
  icon: string;
}
