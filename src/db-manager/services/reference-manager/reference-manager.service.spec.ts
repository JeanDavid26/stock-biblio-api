import { Test, TestingModule } from '@nestjs/testing'
import { ReferenceManagerService } from './reference-manager.service'

describe('ReferenceManagerService', () => {
  let service: ReferenceManagerService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ ReferenceManagerService ]
    }).compile()

    service = module.get<ReferenceManagerService>(ReferenceManagerService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
