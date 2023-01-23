import { IsDate, IsNotEmpty, IsNumber } from 'class-validator'

export class AjoutStockItemDto {
  @IsNotEmpty()
  @IsDate()
  dateImport : Date

  @IsNotEmpty()
  @IsNumber()
  idStock : number
    
  @IsNotEmpty()
  idArticle : number
}