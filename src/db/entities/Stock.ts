import { TypeStock } from 'src/api/@models/enum/type-stock.enum'
import { Column, Entity } from 'typeorm'
import { TableBase } from './TableBase'

@Entity({ schema: 'stock-biblio', name: 'stock' })
export class Stock extends TableBase {
  @Column()
  designation : string

  @Column({ type : 'enum', enum : TypeStock })
  type : TypeStock

}