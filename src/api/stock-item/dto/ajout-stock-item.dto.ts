import { IsNotEmpty, IsNumber } from 'class-validator'

export class AjoutStockItemDto {

  @IsNotEmpty()
  @IsNumber()
  idStock : number
    
  @IsNotEmpty()
  idArticle : number

  @IsNotEmpty()
  idImport : number
}