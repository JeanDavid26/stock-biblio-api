import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { StockItem } from 'src/db/entities/StockItem'
import { Repository } from 'typeorm'

@Injectable()
export class StockItemManagerService {
    
  constructor (
    @InjectRepository(StockItem) private _repo: Repository<StockItem>,
  ) {}
        
  public async lecture (id: number): Promise<StockItem> {
    const stockitem = await this._repo.findOne({
      where: {
        id
      },
      relations : [ 'oStock', 'oArticle' ]
    })
        
    if (!stockitem) {
      throw new NotFoundException()
    }
    return stockitem
  }
        
  public async lister (): Promise<StockItem[]> {
    return this._repo.find({
      relations : [ 'oStock', 'oArticle' ]
    })
  }
        
  public async ajouter (oDonnee: Partial<StockItem>): Promise<StockItem> {
    return this._repo.save(oDonnee)
  }
        
  public async modifier (id: number, oDonnee: Partial<StockItem>): Promise<StockItem> {
    delete oDonnee.id
    oDonnee.id = id
    return this._repo.save(oDonnee)
  }

  public async supprimer (id : number) : Promise<StockItem> {
    await this.lecture(id)
    const categorie : Partial<StockItem> = {
      id,
      dateSuppression : new Date()
    }
    return this._repo.save(categorie)
  }
}
