import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Reference } from 'src/db/entities/Reference'
import { ReferenceManagerService } from './services/reference-manager/reference-manager.service'
import { CategorieManagerService } from './services/categorie-manager/categorie-manager.service'
import { Categorie } from 'src/db/entities/Categorie'

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
      entities: [ Reference, Categorie ]
    }),
    TypeOrmModule.forFeature([ Reference, Categorie ])
  ],
  providers: [ ReferenceManagerService, CategorieManagerService ],
  exports: [ ReferenceManagerService, CategorieManagerService ]
})
export class DbManagerModule {}
