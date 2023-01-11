import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Categorie } from 'src/db/entities/Categorie'
import { Repository } from 'typeorm'

@Injectable()
export class CategorieManagerService {
  constructor (
    @InjectRepository(Categorie) private _repo: Repository<Categorie>,
  ) {}

  public async lecture (id: number): Promise<Categorie> {
    const categorie = await this._repo.findOne({
      where: {
        id
      }
    })

    if (!categorie) {
      throw new NotFoundException()
    }
    return categorie
  }

  public async lister (): Promise<Categorie[]> {
    return this._repo.find()
  }

  public async ajouter (oDonnee: Partial<Categorie>): Promise<Categorie> {
    const categorie = this._repo.create(oDonnee)
    return this._repo.save(categorie)
  }

  public async modifier (id: number, oDonnee: Partial<Categorie>,): Promise<Categorie> {
    delete oDonnee.id
    oDonnee.id = id
    const categorie = this._repo.create(oDonnee)
    return this._repo.save(categorie)
  }
}
