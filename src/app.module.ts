import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { ReferenceModule } from './reference/reference.module';
import { CategorieModule } from './categorie/categorie.module';

@Module({
  imports: [SharedModule, ReferenceModule, CategorieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
