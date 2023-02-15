import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Import } from 'src/db/entities/Import'
import { Repository } from 'typeorm'

@Injectable()
export class ImportManagerService {
  constructor (
    @InjectRepository(Import) private _repo: Repository<Import>,
  ) {}
    
  public async lecture (id: number): Promise<Import> {
    const oImport = await this._repo.findOne({
      where: {
        id
      }
    })
    
    if (!oImport) {
      throw new NotFoundException()
    }
    return oImport
  }
    
  public async lister (): Promise<Import[]> {
    return this._repo.find()
  }
    
  public async ajouter (oDonnee: Partial<Import>): Promise<Import> {
    const oImport = this._repo.create(oDonnee)
    return this._repo.save(oImport)
  }
    
  public async modifier (id: number, oDonnee: Partial<Import>,): Promise<Import> {
    delete oDonnee.id
    oDonnee.id = id
    return this._repo.save(oDonnee)
  }
    
  public async supprimer (id : number) : Promise<Import> {
    await this.lecture(id)
    const oImport : Partial<Import> = {
      id,
      dateSuppression : new Date()
    }
    return this._repo.save(oImport)
  }
}
