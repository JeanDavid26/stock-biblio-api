import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { Stock } from './Stock'
import { TableBase } from './TableBase'

@Entity({ schema: 'stock-biblio', name: 'import' })
export class Import extends TableBase {
  @Column({ name : 'idstock' })
  idStock : number

  @ManyToOne(() => Stock, stock => stock.id)
  @JoinColumn({ name : 'idstock' })
  oStock : Stock

}