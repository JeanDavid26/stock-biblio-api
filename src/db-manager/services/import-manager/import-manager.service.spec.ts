import { Test, TestingModule } from '@nestjs/testing'
import { ImportManagerService } from './import-manager.service'

describe('ImportManagerService', () => {
  let service: ImportManagerService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ ImportManagerService ]
    }).compile()

    service = module.get<ImportManagerService>(ImportManagerService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
