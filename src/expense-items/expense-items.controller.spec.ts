import { Test, TestingModule } from '@nestjs/testing';
import { ExpenseItemsController } from './expense-items.controller';

describe('ExpenseItemsController', () => {
  let controller: ExpenseItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpenseItemsController],
    }).compile();

    controller = module.get<ExpenseItemsController>(ExpenseItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
