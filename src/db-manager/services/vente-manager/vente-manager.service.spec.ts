import { Test, TestingModule } from '@nestjs/testing'
import { VenteManagerService } from './vente-manager.service'

describe('VenteManagerService', () => {
  let service: VenteManagerService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ VenteManagerService ]
    }).compile()

    service = module.get<VenteManagerService>(VenteManagerService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
