import { Test, TestingModule } from '@nestjs/testing';
import { QuickContactController } from './quick-contact.controller';
import { QuickContactService } from './quick-contact.service';

describe('QuickContactController', () => {
  let controller: QuickContactController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuickContactController],
      providers: [QuickContactService],
    }).compile();

    controller = module.get<QuickContactController>(QuickContactController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
