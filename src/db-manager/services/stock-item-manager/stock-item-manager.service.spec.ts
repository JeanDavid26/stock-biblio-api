import { Test, TestingModule } from '@nestjs/testing';
import { StockItemManagerService } from './stock-item-manager.service';

describe('StockItemManagerService', () => {
  let service: StockItemManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockItemManagerService],
    }).compile();

    service = module.get<StockItemManagerService>(StockItemManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
