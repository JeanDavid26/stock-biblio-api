import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { Categorie } from './Categorie'
import { TableBase } from './TableBase'

@Entity({ schema: 'stock-biblio', name: 'article' })
export class Article extends TableBase {
  @Column()
  titre: string

  @Column({ name : 'codereference' })
  codeReference: string

  @Column({ name : 'prixunitaire', type : 'double precision' })
  prixUnitaire : number

  @Column({ name: 'idcategorie' })
  idCategorie: number

  @ManyToOne(() => Categorie, (categorie) => categorie.id)
  @JoinColumn({ name: 'idcategorie' })
  oCategorie: Categorie
}
