import { IsNotEmpty } from 'class-validator'

export class AjouterArticleDto {
  @IsNotEmpty()
  titre: string

  @IsNotEmpty()
  codeReference: string

  @IsNotEmpty()
  idCategorie : number

  @IsNotEmpty()
  prixUnitaire : number
}
