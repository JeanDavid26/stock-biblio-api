import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ImportManagerService } from 'src/db-manager/services/import-manager/import-manager.service'
import { Import } from 'src/db/entities/Import'
import { AjoutImportDto } from './dto/ajout-import.dto'
import { ImportService } from './import.service'

@Controller('import')
export class ImportController {

  constructor (
    private _importService : ImportService,
    private _importManagerService : ImportManagerService
  ) {}
 
  @Get()
  public lister () : Promise <Import[]> {
    return this._importManagerService.lister()
  }

  @Get(':id')
  public recuperer (@Param('id') id : number) : Promise <Import> {
    return this._importManagerService.lecture(id)
  }

  @Post()
  public ajouter (@Body() oDonne : AjoutImportDto) : Promise<Import> {
    return this._importService.ajouterImport(oDonne)
  }
}
