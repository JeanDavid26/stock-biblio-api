import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { Article } from './Article'
import { Import } from './Import'
import { Stock } from './Stock'
import { TableBase } from './TableBase'
import { Vente } from './Vente'

@Entity({ schema: 'stock-biblio', name: 'stockitem' })
export class StockItem extends TableBase {

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

  @Column({ name : 'idimport', nullable : true })
  idImport : number

  @ManyToOne(() => Import, oimport => oimport.id)
  @JoinColumn({ name : 'idimport' })
  oImport : Import

  @Column({ name : 'idvente', nullable : true })
  idVente : number

  @ManyToOne(() => Vente, vente => vente.id)
  @JoinColumn({ name : 'idvente' })
  oVente : Vente
}