import { Module } from '@nestjs/common'
import { SharedModule } from 'src/shared/shared.module'
import { ImportController } from './import.controller'
import { ImportService } from './import.service'

@Module({
  controllers: [ ImportController ],
  providers: [ ImportService ],
  imports : [ SharedModule ]
})
export class ImportModule {}
