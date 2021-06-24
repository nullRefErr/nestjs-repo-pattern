import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('Pets')
export class Pets {
  constructor(name: string, bday: string, id: string) {
    this.id = id;
    this.bday = bday;
    this.name = name;
  }

  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  bday: string;
}
