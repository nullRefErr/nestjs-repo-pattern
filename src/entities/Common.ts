import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm"

export class Common extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string
    @Column()
    created_at : Date
    @Column()
    created_by : string
    @Column()
    updated_at : Date
    @Column()
    updated_by : string

}