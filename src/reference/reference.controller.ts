import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ReferenceManagerService } from 'src/db-manager/services/reference-manager/reference-manager.service';
import { Reference } from 'src/db/entities/Reference';
import { AjouterReferenceDto } from './dto/ajouter-reference.dto';

@Controller('reference')
export class ReferenceController {
  constructor(private _referenceManagerService: ReferenceManagerService) {}

  @Get()
  public lister(): Promise<Reference[]> {
    return this._referenceManagerService.lister();
  }

  @Get(':id')
  public lecture(@Param('id') id: number): Promise<Reference> {
    return this._referenceManagerService.lecture(id);
  }

  @Post()
  public ajouter(@Body() oDonnee: AjouterReferenceDto): Promise<Reference> {
    return this._referenceManagerService.ajouter(oDonnee);
  }

  @Put(':id')
  public modifier(
    @Param('id') id: number,
    @Body() oDonnee: AjouterReferenceDto,
  ): Promise<Reference> {
    return this._referenceManagerService.modifier(id, oDonnee);
  }
}
