import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { CategorieManagerService } from 'src/db-manager/services/categorie-manager/categorie-manager.service'
import { Categorie } from 'src/db/entities/Categorie'
import { AjouterCategorieDto } from './dto/ajouter-categorie.dto'

@Controller('categorie')
export class CategorieController {
  constructor (private _categorieManagerService: CategorieManagerService) {}

  @Get(':id')
  public lecture (@Param('id') id: number): Promise<Categorie> {
    return this._categorieManagerService.lecture(id)
  }

  @Get()
  public lister (): Promise<Categorie[]> {
    return this._categorieManagerService.lister()
  }

  @Post()
  public ajouter (@Body() oDonnee: AjouterCategorieDto): Promise<Categorie> {
    return this._categorieManagerService.ajouter(oDonnee)
  }

  @Put(':id')
  public modifier (@Param('id') id: number, @Body() oDonnee: AjouterCategorieDto): Promise<Categorie> {
    console.log(id)
    return this._categorieManagerService.modifier(parseInt(id as any), oDonnee)
  }
}
