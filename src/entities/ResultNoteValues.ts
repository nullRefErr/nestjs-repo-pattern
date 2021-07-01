import { Entity, Column } from 'typeorm';
import { Common } from './Common';

@Entity('Result_Note_Values')
export class ResultNoteValues extends Common {
  constructor(name: string, createdBy: number) {
    super();
    this.name = name;
    this.createdBy = createdBy;
  }
  @Column('varchar')
  name: string;
}
