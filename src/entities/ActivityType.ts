import { Entity, Column } from 'typeorm';
import { Common } from './Common';

@Entity('Activity_Type')
export class ActivityType extends Common {
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
