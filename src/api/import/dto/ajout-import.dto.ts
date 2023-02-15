import { IsDate, IsNotEmpty } from 'class-validator'

export class AjoutImportDto {
  @IsNotEmpty()
  idStock : number

  @IsNotEmpty()
  @IsDate()
  date : Date

  toStockItem : ImportStockItemDto[]
}

export class ImportStockItemDto {
  idArticle : number
  quantite : number
}