import { Entity, Column } from 'typeorm';
import { Common } from './Common';

@Entity('Result_Notes')
export class ResultNotes extends Common {
  constructor(name: string, createdBy: number) {
    super();
    this.name = name;
    this.createdBy = createdBy;
  }
  @Column('varchar')
  name: string;
}
