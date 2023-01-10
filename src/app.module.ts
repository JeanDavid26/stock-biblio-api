import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { DbManagerModule } from './db-manager/db-manager.module';

@Module({
  imports: [SharedModule, DbManagerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
