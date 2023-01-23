import { Body, Controller, NotImplementedException, Post } from '@nestjs/common'
import { StockItemManagerService } from '../../db-manager/services/stock-item-manager/stock-item-manager.service'
import { StockItem } from '../../db/entities/StockItem'
import { AjoutStockItemDto } from './dto/ajout-stock-item.dto'
import { StockItemService } from './stock-item.service'

@Controller('stock-item')
export class StockItemController {

  constructor (
    private _stockItemManagerService : StockItemManagerService,
    private _stockItemService : StockItemService
  ) {}

  @Post()
  public ajouter (@Body() oDonnee : AjoutStockItemDto) : Promise<StockItem> {
    return this._stockItemManagerService.ajouter(oDonnee)
  }

  @Post('multi')
  public ajouterMultiple (@Body() toDonnee : AjoutStockItemDto[]) : Promise<StockItem[]> {
    throw new NotImplementedException()
  }
}
