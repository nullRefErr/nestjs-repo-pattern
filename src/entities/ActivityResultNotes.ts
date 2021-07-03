import { Entity, ManyToOne, JoinColumn, Unique } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Common } from './Common';
import { ResultNotes } from './ResultNotes';
import { Activity } from './Activity';

@Entity('Activity_Result_Notes')
@ObjectType()
@Unique('activity_result_note_unique_id', ['activityId', 'resultNoteId'])
export class ActivityResultNotes extends Common {
  constructor(
    activityId: Activity,
    resultNoteId: ResultNotes,
    createdBy: number,
  ) {
    super();
    this.resultNoteId = resultNoteId;
    this.activityId = activityId;
    this.createdBy = createdBy;
  }
  @Field(() => Int)
  @ManyToOne(() => Activity)
  @JoinColumn({ name: 'activity_id', referencedColumnName: 'id' })
  activityId: Activity;

  @Field(() => Int)
  @ManyToOne(() => ResultNotes)
  @JoinColumn({ name: 'result_note_id', referencedColumnName: 'id' })
  resultNoteId: ResultNotes;
}
