import { Entity, Column } from 'typeorm';
import { Common } from './Common';

@Entity('Result_Note_Values')
export class ResultNoteValues extends Common {
  @Column('varchar')
  name: string;
}
