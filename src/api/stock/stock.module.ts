import { Module } from '@nestjs/common'
import { SharedModule } from 'src/shared/shared.module'
import { StockController } from './stock.controller'
import { StockService } from './stock.service'

@Module({
  controllers: [ StockController ],
  providers: [ StockService ],
  imports : [ SharedModule ]
})
export class StockModule {}
