import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Vente } from 'src/db/entities/Vente'
import { Repository } from 'typeorm'

@Injectable()
export class VenteManagerService {
  constructor (
        @InjectRepository(Vente) private _repo: Repository<Vente>,
  ) {}
        
  public async lecture (id: number): Promise<Vente> {
    const oVente = await this._repo.findOne({
      where: {
        id
      }
    })
        
    if (!oVente) {
      throw new NotFoundException()
    }
    return oVente
  }
        
  public async lister (): Promise<Vente[]> {
    return this._repo.find()
  }
        
  public async ajouter (oDonnee: Partial<Vente>): Promise<Vente> {
    const oVente = this._repo.create(oDonnee)
    return this._repo.save(oVente)
  }
        
  public async modifier (id: number, oDonnee: Partial<Vente>,): Promise<Vente> {
    delete oDonnee.id
    oDonnee.id = id
    return this._repo.save(oDonnee)
  }
        
  public async supprimer (id : number) : Promise<Vente> {
    await this.lecture(id)
    const oVente : Partial<Vente> = {
      id,
      dateSuppression : new Date()
    }
    return this._repo.save(oVente)
  }
}
