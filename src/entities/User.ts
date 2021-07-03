import { Entity, Column } from 'typeorm';
import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { Common } from './Common';

export enum Roles {
  MANAGEMENT_USER = 'management_user',
  OPERATION = 'operation',
  OPERATION_PLUS = 'operation_plus',
}
registerEnumType(Roles, { name: 'Roles' });

@Entity('User')
@ObjectType()
export class User extends Common {
  constructor(
    fullname: string,
    email: string,
    countryId: number,
    language: string,
    role: Roles,
    createdBy: number,
  ) {
    super();
    this.fullname = fullname;
    this.email = email;
    this.countryId = countryId;
    this.language = language;
    this.role = role;
    this.createdBy = createdBy;
  }
  @Field(() => String)
  @Column('varchar', { length: 100 })
  fullname: string;

  @Field(() => String)
  @Column('varchar', { length: 100 })
  email: string;

  @Field(() => Int)
  @Column('int', { name: 'country_id' })
  countryId: number;

  @Field(() => String)
  @Column()
  language: string;

  @Field(() => Roles)
  @Column({
    type: 'enum',
    enum: Roles,
    default: Roles.OPERATION,
  })
  role: Roles;
}
