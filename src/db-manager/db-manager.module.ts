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
import { ImportManagerService } from './services/import-manager/import-manager.service'
import { VenteManagerService } from './services/vente-manager/vente-manager.service'
import { Vente } from 'src/db/entities/Vente'
import { Import } from 'src/db/entities/Import'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'duvernayjeandavid',
      password: 'Ppoolloo12',
      database: 'stock-biblio',
      synchronize: true,
      entities: [ Article, Categorie, Stock, StockItem, Vente, Import ]
    }),
    TypeOrmModule.forFeature([ Article, Categorie, Stock, StockItem, Vente, Import ])
  ],
  providers: [ ArticleManagerService, CategorieManagerService, StockManagerService, StockItemManagerService, ImportManagerService, VenteManagerService ],
  exports: [ ArticleManagerService, CategorieManagerService, StockItemManagerService, StockManagerService ]
})
export class DbManagerModule {}
