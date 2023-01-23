import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ArticleManagerService } from 'src/db-manager/services/article-manager/article-manager.service'
import { Article } from 'src/db/entities/Article'
import { AjouterArticleDto } from './dto/ajouter-article.dto'

@Controller('article')
export class ArticleController {
  constructor (private _articleManagerService: ArticleManagerService) {}

  @Get()
  public lister (): Promise<Article[]> {
    return this._articleManagerService.lister()
  }

  @Get(':id')
  public lecture (@Param('id') id: number): Promise<Article> {
    return this._articleManagerService.lecture(id)
  }

  @Post()
  public ajouter (@Body() oDonnee: AjouterArticleDto): Promise<Article> {
    return this._articleManagerService.ajouter(oDonnee)
  }

  @Put(':id')
  public modifier (@Param('id') id: number, @Body() oDonnee: AjouterArticleDto): Promise<Article> {
    return this._articleManagerService.modifier(id, oDonnee)
  }

  @Delete(':id')
  public supprimer (@Param('id') id : number) : Promise<Article> {
    return this._articleManagerService.supprimer(id)
  }
}
