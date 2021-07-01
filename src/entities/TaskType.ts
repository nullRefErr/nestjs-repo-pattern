import { Entity, Column } from 'typeorm';
import { Common } from './Common';

@Entity('Task_Type')
export class TaskType extends Common {
  constructor(name: string, icon: string, createdBy: number) {
    super();
    this.name = name;
    this.icon = icon;
    this.createdBy = createdBy;
  }
  @Column('varchar')
  name: string;

  @Column('varchar')
  icon: string;
}
