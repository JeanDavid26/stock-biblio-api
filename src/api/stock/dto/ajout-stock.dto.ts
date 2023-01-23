import { IsEnum, IsNotEmpty } from 'class-validator'
import { TypeStock } from '../../@models/enum/type-stock.enum'

export class AjoutStockDto {
  @IsNotEmpty()
    designation : string

  @IsNotEmpty()
  @IsEnum(TypeStock)
    type : TypeStock
}