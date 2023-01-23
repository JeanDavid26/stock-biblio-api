import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Article } from 'src/db/entities/Article'
import { Repository } from 'typeorm'

@Injectable()
export class ArticleManagerService {
  constructor (
    @InjectRepository(Article) private _repo: Repository<Article>,
  ) {}

  public async lecture (id: number): Promise<Article> {
    const article = await this._repo.findOne({
      where: {
        id
      },
      relations : [ 'oCategorie' ]
    })

    if (!article) {
      throw new NotFoundException()
    }
    return article
  }

  public async lister (): Promise<Article[]> {
    return this._repo.find({
      relations : [ 'oCategorie' ]
    })
  }

  public async ajouter (oDonnee: Partial<Article>): Promise<Article> {
    const reference = this._repo.create(oDonnee)
    return this._repo.save(reference)
  }

  public async modifier (id: number, oDonnee: Partial<Article>): Promise<Article> {
    delete oDonnee.id
    oDonnee.id = id
    return this._repo.save(oDonnee)
  }

  public async supprimer (id : number) : Promise<Article> {
    await this.lecture(id)
    return this._repo.save({
      id,
      dateSuppression: new Date()
    })
  }
}
