import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Reference } from 'src/db/entities/Reference'
import { Repository } from 'typeorm'

@Injectable()
export class ReferenceManagerService {
  constructor (
    @InjectRepository(Reference) private _repo: Repository<Reference>,
  ) {}

  public async lecture (id: number): Promise<Reference> {
    const reference = await this._repo.findOne({
      where: {
        id
      }
    })

    if (!reference) {
      throw new NotFoundException()
    }
    return reference
  }

  public async lister (): Promise<Reference[]> {
    return this._repo.find()
  }

  public async ajouter (oDonnee: Partial<Reference>): Promise<Reference> {
    const reference = this._repo.create(oDonnee)
    return this._repo.save(reference)
  }

  public async modifier (
    id: number,
    oDonnee: Partial<Reference>,
  ): Promise<Reference> {
    delete oDonnee.id
    oDonnee.id = id
    const reference = this._repo.create(oDonnee)
    return this._repo.save(reference)
  }
}
