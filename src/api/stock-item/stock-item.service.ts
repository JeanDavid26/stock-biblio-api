import { Injectable, NotImplementedException } from '@nestjs/common'
import { StockItemManagerService } from '../../db-manager/services/stock-item-manager/stock-item-manager.service'
import { StockItem } from '../../db/entities/StockItem'

@Injectable()
export class StockItemService {

  constructor (
    private _stockItemManagerService : StockItemManagerService
  ) {}

  public ajouterMultiple (toDonne : any) : Promise<StockItem> {
    
    throw new NotImplementedException()
  }
}
