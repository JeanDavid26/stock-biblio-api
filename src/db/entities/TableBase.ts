import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

export class TableBase {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn()
  dateCreation: Date

  @UpdateDateColumn()
  dateModification: Date

  @DeleteDateColumn()
  dateSuppression : Date
}
