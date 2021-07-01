import { Entity, Column } from 'typeorm';
import { Common } from './Common';

export enum Roles {
  MANAGEMENT_USER = 'management_user',
  OPERATION = 'operation',
  OPERATION_PLUS = 'operation_plus',
}

@Entity('User')
export class User extends Common {
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
