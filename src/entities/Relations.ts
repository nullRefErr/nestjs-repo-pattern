import { Entity, Column } from 'typeorm';
import { Common } from './Common';
import { PolymorphicParent } from 'typeorm-polymorphic';
import { Activity } from './Activity';
import { Task } from './Task';
import { PolymorphicChildInterface } from 'typeorm-polymorphic/dist/polymorphic.interface';

export enum Type {
  DEFAULT = 'default',
  CLOSED_BY = 'closed_by',
}

@Entity('Relations')
export class Relations extends Common implements PolymorphicChildInterface {
  @PolymorphicParent(() => [Activity, Task])
  owner: Activity | Task;

  @Column('bigint')
  entityId: number;

  @Column()
  entityType: string;

  @Column({
    type: 'enum',
    enum: Type,
    default: Type.DEFAULT,
  })
  type: Type;

  @Column({ name: 'related_object_id' })
  relatedObjectId: number;

  @Column({ name: 'related_object_type' })
  relatedObjectType: string;
}
