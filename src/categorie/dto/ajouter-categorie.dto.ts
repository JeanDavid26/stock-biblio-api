import { IsNotEmpty } from 'class-validator';

export class AjouterCategorieDto {
  @IsNotEmpty()
  designation: string;
}
