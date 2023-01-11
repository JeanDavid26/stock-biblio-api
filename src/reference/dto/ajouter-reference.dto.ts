import { IsNotEmpty, IsOptional } from 'class-validator'

export class AjouterReferenceDto {
  @IsNotEmpty()
  titre: string

  @IsNotEmpty()
  code: string

  @IsNotEmpty()
  idCategorie

  @IsOptional()
  auteur: string
}
