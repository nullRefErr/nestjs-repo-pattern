import { Entity, Column } from 'typeorm';
import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { Common } from './Common';
import { PolymorphicParent } from 'typeorm-polymorphic';
import { Activity } from './Activity';
import { Task } from './Task';
import { PolymorphicChildInterface } from 'typeorm-polymorphic/dist/polymorphic.interface';

export enum Type {
  DEFAULT = 'default',
  CLOSED_BY = 'closed_by',
}
registerEnumType(Type, { name: 'Type' });

@Entity('Relations')
@ObjectType()
export class Relations extends Common implements PolymorphicChildInterface {
  constructor(
    owner: Activity | Task,
    type: Type,
    relatedObjectId: number,
    relatedObjectType: string,
    createdBy: number,
  ) {
    super();
    this.owner = owner;
    this.type = type;
    this.relatedObjectId = relatedObjectId;
    this.relatedObjectType = relatedObjectType;
    this.createdBy = createdBy;
  }
  @PolymorphicParent(() => [Activity, Task])
  owner: Activity | Task;

  @Field(() => Int)
  @Column('bigint')
  entityId: number;

  @Field(() => String)
  @Column()
  entityType: string;

  @Field(() => Type)
  @Column({
    type: 'enum',
    enum: Type,
    default: Type.DEFAULT,
  })
  type: Type;

  @Field(() => Int)
  @Column('bigint', { name: 'related_object_id' })
  relatedObjectId: number;

  @Field(() => String)
  @Column({ name: 'related_object_type' })
  relatedObjectType: string;
}
