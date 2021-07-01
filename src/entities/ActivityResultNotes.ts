import { Entity, ManyToOne, JoinColumn, Unique } from 'typeorm';
import { Common } from './Common';
import { ResultNoteValues } from './ResultNoteValues';
import { ResultNotes } from './ResultNotes';
import { Activity } from './Activity';

@Entity('Activity_Result_Notes')
@Unique('activity_result_note_unique_id', ['activityId', 'resultNoteId']) // named; multiple fields
export class ActivityResultNotes extends Common {
  @ManyToOne((type) => Activity)
  @JoinColumn({ name: 'activity_id', referencedColumnName: 'id' })
  activityId: Activity;
  //ensure uniqueness between activity_id + result_note_id pairs
  @ManyToOne((type) => ResultNotes)
  @JoinColumn({ name: 'result_note_id', referencedColumnName: 'id' })
  resultNoteId: ResultNotes;

  @ManyToOne((type) => ResultNoteValues)
  @JoinColumn({ name: 'result_note_value_id', referencedColumnName: 'id' })
  resultNoteValueId: ResultNoteValues;
}
