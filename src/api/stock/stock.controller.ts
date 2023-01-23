import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { StockManagerService } from '../../db-manager/services/stock-manager/stock-manager.service'
import { Stock } from '../../db/entities/Stock'
import { AjoutStockDto } from './dto/ajout-stock.dto'

@Controller('stock')
export class StockController {

  constructor (
    private _stockManagerService : StockManagerService
  ) {
  }

  @Get()
  public lister () : Promise<Stock[]> {
    return this._stockManagerService.lister()
  }

  @Get(':id')
  public lecture (@Param('id') id : number) : Promise<Stock> {
    return this._stockManagerService.lecture(id)
  }

  @Put(':id')
  public modifier (@Param(':id') id : number, @Body() oDonnee : AjoutStockDto) : Promise<Stock> {
    return this._stockManagerService.modifier(id, oDonnee)
  }

  @Post()
  public ajouter (@Body() oDonnee : AjoutStockDto) : Promise<Stock> {
    return this._stockManagerService.ajouter(oDonnee)
  }
}
