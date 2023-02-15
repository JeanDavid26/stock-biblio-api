import { Injectable } from '@nestjs/common'
import { ImportManagerService } from 'src/db-manager/services/import-manager/import-manager.service'
import { StockItemManagerService } from 'src/db-manager/services/stock-item-manager/stock-item-manager.service'
import { Import } from 'src/db/entities/Import'
import { AjoutImportDto } from './dto/ajout-import.dto'

@Injectable()
export class ImportService {

  constructor (
    private _importManagerService : ImportManagerService,
    private _stockItemManagerService : StockItemManagerService
  ) {

  }

  public async ajouterImport (oDonnee : AjoutImportDto) : Promise<Import> {
    const oImport = await this._importManagerService.ajouter(
      {
        date : oDonnee.date,
        idStock : oDonnee.idStock
      }
    )
    const tPromise = []
    if (oImport) {
      for (let index = 0; index < oDonnee.toStockItem.length; index++) {
        const stockitem = oDonnee.toStockItem[index]
        
        for (let index = 0; index < stockitem.quantite; index++) {
          tPromise.push(this._stockItemManagerService.ajouter(
            {
              idStock : oDonnee.idStock,
              idImport : oImport.id,
              idArticle : stockitem.idArticle
            }
          ))
        }
      }
      await Promise.all(tPromise)
    }
    return oImport
  }
}
