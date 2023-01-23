import { Module } from '@nestjs/common'
import { SharedModule } from 'src/shared/shared.module'
import { StockItemController } from './stock-item.controller'
import { StockItemService } from './stock-item.service';

@Module({
  controllers: [ StockItemController ],
  imports : [ SharedModule ],
  providers: [StockItemService]
})
export class StockItemModule {}
