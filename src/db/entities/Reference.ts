import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { Categorie } from './Categorie'
import { TableBase } from './TableBase'

@Entity({ schema: 'stock-biblio', name: 'reference' })
export class Reference extends TableBase {
  @Column()
  titre: string

  @Column({ nullable: true })
  auteur: string

  @Column()
  code: string

  @Column({ name: 'idcategorie' })
  idCategorie: number

  @ManyToOne(() => Categorie, (categorie) => categorie.id)
  @JoinColumn({ name: 'idcategorie' })
  oCategorie: Categorie
}
