import { Entity, Column } from 'typeorm';
import { Common } from './Common';

@Entity('Result_Notes')
export class ResultNotes extends Common {
  @Column('varchar')
  name: string;
}
