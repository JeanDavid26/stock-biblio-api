import { Module } from '@nestjs/common'
import { SharedModule } from 'src/shared/shared.module'
import { StockItemController } from './stock-item.controller'

@Module({
  controllers: [ StockItemController ],
  imports : [ SharedModule ]
})
export class StockItemModule {}
