import { Module } from '@nestjs/common'
import { ArticleModule } from './article/article.module'
import { CategorieModule } from './categorie/categorie.module'
import { StockItemModule } from './stock-item/stock-item.module'
import { StockModule } from './stock/stock.module'

@Module({
  imports : [
    ArticleModule,
    CategorieModule,
    StockItemModule,
    StockModule
  ]
})
export class ApiModule {}
