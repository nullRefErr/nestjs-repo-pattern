import { Entity, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Common } from './Common';

@Entity('Event_Type')
@ObjectType()
export class EventType extends Common {
  constructor(name: string, icon: string, createdBy: number) {
    super();
    this.name = name;
    this.icon = icon;
    this.createdBy = createdBy;
  }

  @Field(() => String)
  @Column('varchar')
  name: string;

  @Field(() => String)
  @Column('varchar')
  icon: string;
}
