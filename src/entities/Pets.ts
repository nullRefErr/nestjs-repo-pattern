import { Entity, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Common } from './Common';
@Entity('Pets')
@ObjectType()
export class Pets extends Common {
  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  bday: string;
}
