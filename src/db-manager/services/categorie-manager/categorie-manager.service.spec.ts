import { Test, TestingModule } from '@nestjs/testing'
import { CategorieManagerService } from './categorie-manager.service'

describe('CategorieManagerService', () => {
  let service: CategorieManagerService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ CategorieManagerService ]
    }).compile()

    service = module.get<CategorieManagerService>(CategorieManagerService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
