import { Entity, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Common } from './Common';

@Entity('Result_Note_Values')
@ObjectType()
export class ResultNoteValues extends Common {
  constructor(name: string, createdBy: number) {
    super();
    this.name = name;
    this.createdBy = createdBy;
  }
  @Field(() => String)
  @Column('varchar')
  name: string;
}
