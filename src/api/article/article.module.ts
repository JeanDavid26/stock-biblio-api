import { Module } from '@nestjs/common'
import { SharedModule } from 'src/shared/shared.module'
import { ArticleController } from './article.controller'

@Module({
  controllers: [ ArticleController ],
  imports: [ SharedModule ]
})
export class ArticleModule {}
