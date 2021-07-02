import { Entity, ManyToOne, JoinColumn, Unique } from 'typeorm';
import { Common } from './Common';
import { ResultNoteValues } from './ResultNoteValues';
import { ResultNotes } from './ResultNotes';
import { Activity } from './Activity';

@Entity('Activity_Result_Notes')
@Unique('activity_result_note_unique_id', ['activityId', 'resultNoteId']) // named; multiple fields
export class ActivityResultNotes extends Common {
  constructor(
    activityId: Activity,
    resultNoteId: ResultNotes,
    resultNoteValueId: ResultNoteValues,
    createdBy: number,
  ) {
    super();
    this.resultNoteId = resultNoteId;
    this.activityId = activityId;
    this.createdBy = createdBy;
  }
  @ManyToOne(() => Activity)
  @JoinColumn({ name: 'activity_id', referencedColumnName: 'id' })
  activityId: Activity;

  @ManyToOne(() => ResultNotes)
  @JoinColumn({ name: 'result_note_id', referencedColumnName: 'id' })
  resultNoteId: ResultNotes;
}
