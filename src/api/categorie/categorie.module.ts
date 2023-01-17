import { Module } from '@nestjs/common'
import { SharedModule } from 'src/shared/shared.module'
import { CategorieController } from './categorie.controller'

@Module({
  controllers: [ CategorieController ],
  imports: [ SharedModule ]
})
export class CategorieModule {}
