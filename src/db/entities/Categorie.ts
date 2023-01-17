import { Column, Entity, OneToMany } from 'typeorm'
import { Article } from './Article'
import { TableBase } from './TableBase'

@Entity({ schema: 'stock-biblio', name: 'categorie' })
export class Categorie extends TableBase {
  @Column()
  designation: string

  @OneToMany(() => Article, (article) => article.oCategorie)
  tReference: Article[]
}
