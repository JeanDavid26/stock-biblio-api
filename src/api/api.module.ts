import { Module } from '@nestjs/common'
import { ArticleModule } from './article/article.module'
import { CategorieModule } from './categorie/categorie.module'
import { StockItemModule } from './stock-item/stock-item.module'
import { StockModule } from './stock/stock.module'
import { ImportModule } from './import/import.module';

@Module({
  imports : [
    ArticleModule,
    CategorieModule,
    StockItemModule,
    StockModule,
    ImportModule
  ]
})
export class ApiModule {}
