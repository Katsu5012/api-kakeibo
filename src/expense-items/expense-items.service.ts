import { Prisma, expenseItem } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class ExpenseItemsService {
  constructor(private readonly prisma: PrismaService) {}

  async createExpenseItem(
    data: Prisma.expenseItemCreateInput,
  ): Promise<expenseItem> {
    return await this.prisma.expenseItem.create({
      data,
    });
  }

  async getExpenseItem(id: number): Promise<expenseItem> {
    return await this.prisma.expenseItem.findUnique({
      where: { id },
    });
  }

  async updateExpenseItem(
    id: number,
    data: Prisma.expenseItemUpdateInput,
  ): Promise<expenseItem> {
    return await this.prisma.expenseItem.update({ where: { id }, data });
  }

  async deleteExpenseItem(id: number): Promise<expenseItem> {
    return await this.prisma.expenseItem.delete({ where: { id: id } });
  }
}
