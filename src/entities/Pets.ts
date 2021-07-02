import { Entity, Column } from 'typeorm';
import { Common } from './Common';
@Entity('Pets')
export class Pets extends Common {
  @Column()
  name: string;
  @Column()
  bday: string;
}
