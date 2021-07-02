import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Common } from './Common';
import { ResultNoteValues } from './ResultNoteValues';

@Entity('Result_Notes')
export class ResultNotes extends Common {
  constructor(
    name: string,
    createdBy: number,
    resultNoteValueId: ResultNoteValues,
  ) {
    super();
    this.name = name;
    this.resultNoteValueId = resultNoteValueId;
    this.createdBy = createdBy;
  }
  @Column('varchar')
  name: string;

  @ManyToOne(() => ResultNoteValues)
  @JoinColumn({ name: 'result_note_value_id', referencedColumnName: 'id' })
  resultNoteValueId: ResultNoteValues;
}
