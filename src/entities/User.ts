import { Entity, Column } from 'typeorm';
import { Common } from './Common';

export enum Roles {
  MANAGEMENT_USER = 'management_user',
  OPERATION = 'operation',
  OPERATION_PLUS = 'operation_plus',
}

@Entity('User')
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
  @Column('varchar', { length: 100 })
  fullname: string;

  @Column('varchar', { length: 100 })
  email: string;

  @Column('int', { name: 'country_id' })
  countryId: number;

  @Column()
  language: string;

  @Column({
    type: 'enum',
    enum: Roles,
    default: Roles.OPERATION,
  })
  role: Roles;
}
