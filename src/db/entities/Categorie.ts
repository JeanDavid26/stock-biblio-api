import { Column, Entity, OneToMany } from 'typeorm';
import { Reference } from './Reference';
import { TableBase } from './TableBase';

@Entity({ schema: 'stock-biblio', name: 'categorie' })
export class Categorie extends TableBase {
  @Column()
  designation: string;

  @OneToMany(() => Reference, (reference) => reference.Categorie)
  tReference: Reference[];
}
