import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Stock } from 'src/db/entities/Stock'
import { Repository } from 'typeorm'

@Injectable()
export class StockManagerService {

  constructor (
    @InjectRepository(Stock) private _repo: Repository<Stock>,
  ) {}
    
  public async lecture (id: number): Promise<Stock> {
    const stock = await this._repo.findOne({
      where: {
        id
      }
    })
    
    if (!stock) {
      throw new NotFoundException()
    }
    return stock
  }
    
  public async lister (): Promise<Stock[]> {
    return this._repo.find({
    })
  }
    
  public async ajouter (oDonnee: Partial<Stock>): Promise<Stock> {
    return this._repo.save(oDonnee)
  }
    
  public async modifier (id: number, oDonnee: Partial<Stock>): Promise<Stock> {
    delete oDonnee.id
    oDonnee.id = id
    return this._repo.save(oDonnee)
  }

  public async supprimer (id : number) : Promise<Stock> {
    await this.lecture(id)
    const stock : Partial<Stock> = {
      id,
      dateSuppression : new Date()
    }
    return this._repo.save(stock)
  }
}
