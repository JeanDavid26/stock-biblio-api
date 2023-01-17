import { Module } from '@nestjs/common'
import { ArticleModule } from './article/article.module'
import { CategorieModule } from './categorie/categorie.module'
import { StockItemModule } from './stock-item/stock-item.module'

@Module({
  imports : [
    ArticleModule,
    CategorieModule,
    StockItemModule
  ]
})
export class ApiModule {}
