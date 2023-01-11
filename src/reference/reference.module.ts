import { Module } from '@nestjs/common'
import { SharedModule } from 'src/shared/shared.module'
import { ReferenceController } from './reference.controller'

@Module({
  controllers: [ ReferenceController ],
  imports: [ SharedModule ]
})
export class ReferenceModule {}
