import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, SaveOptions, RemoveOptions} from "typeorm"
import { Common } from "./Common"

@Entity('User')
export class User extends Common {
    @Column()
    username : string;
    @Column()
    password : string;
    @Column()
    name : string;
}
