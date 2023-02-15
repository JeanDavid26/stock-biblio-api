import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm'
import { Stock } from './Stock'
import { StockItem } from './StockItem'
import { TableBase } from './TableBase'

@Entity({ schema: 'stock-biblio', name: 'import' })
export class Import extends TableBase {
  
  @Column({ name : 'date', type : 'date' })
  date : Date

  @Column({ name : 'idstock' })
  idStock : number

  @ManyToOne(() => Stock, stock => stock.id)
  @JoinColumn({ name : 'idstock' })
  oStock : Stock

  @OneToMany(()=> StockItem, stockitem => stockitem.oImport)
  toStockItem : StockItem[]
}