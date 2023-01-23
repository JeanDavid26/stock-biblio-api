import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Article } from 'src/db/entities/Article'
import { CategorieManagerService } from './services/categorie-manager/categorie-manager.service'
import { Categorie } from 'src/db/entities/Categorie'
import { StockManagerService } from './services/stock-manager/stock-manager.service'
import { Stock } from 'src/db/entities/Stock'
import { ArticleManagerService } from './services/article-manager/article-manager.service'
import { StockItemManagerService } from './services/stock-item-manager/stock-item-manager.service'
import { StockItem } from 'src/db/entities/StockItem'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'stock-biblio',
      synchronize: true,
      entities: [ Article, Categorie, Stock, StockItem ]
    }),
    TypeOrmModule.forFeature([ Article, Categorie, Stock, StockItem ])
  ],
  providers: [ ArticleManagerService, CategorieManagerService, StockManagerService, StockItemManagerService ],
  exports: [ ArticleManagerService, CategorieManagerService, StockItemManagerService, StockManagerService ]
})
export class DbManagerModule {}
