import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { Article } from './Article'
import { Stock } from './Stock'
import { TableBase } from './TableBase'

@Entity({ schema: 'stock-biblio', name: 'stockitem' })
export class StockItem extends TableBase {
  @Column({ name : 'dateimport', type : 'date' })
  dateImport : Date

  @Column({ name : 'datevente', type : 'date' })
  dateVente : Date

  @Column({ name : 'idstock' })
  idStock : number

  @ManyToOne(() => Stock, stock => stock.id)
  @JoinColumn({ name : 'idstock' })
  oStock : Stock

  @Column({ name : 'idarticle' })
  idArticle : number

  @ManyToOne(() => Article, article => article.id)
  @JoinColumn({ name : 'idarticle' })
  oArticle : Article
}