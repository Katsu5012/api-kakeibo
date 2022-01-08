import { expenseItem } from '.prisma/client';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ExpenseItemsService } from './expense-items.service';
@Controller('expense-items')
export class ExpenseItemsController {
  constructor(private readonly expenseItemsService: ExpenseItemsService) {}

  @Post()
  async createExpenseItem(@Body() data: any): Promise<expenseItem> {
    return this.expenseItemsService.createExpenseItem(data);
  }

  @Get(':id')
  async getExpenseItem(@Param('id') id: number): Promise<expenseItem> {
    const expenseItem = await this.expenseItemsService.getExpenseItem(id);
    if (!expenseItem) {
      throw new NotFoundException();
    }
    return expenseItem;
  }

  @Put(':id')
  async updateExpenseItem(
    @Param('id') id: number,
    @Body() expenseItemData: expenseItem,
  ): Promise<expenseItem> {
    const expenseItem = await this.expenseItemsService.updateExpenseItem(
      id,
      expenseItemData,
    );
    if (!expenseItem) {
      throw new NotFoundException();
    }
    return expenseItem;
  }

  @Delete(':id')
  async deleteExpenseItem(id: number): Promise<expenseItem> {
    const expenseItem = await this.expenseItemsService.deleteExpenseItem(id);
    if (!expenseItem) {
      throw new NotFoundException();
    }
    return expenseItem;
  }
}
