import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ExpenseItemsController } from './expense-items.controller';
import { ExpenseItemsService } from './expense-items.service';
@Module({
  imports: [],
  controllers: [ExpenseItemsController],
  providers: [ExpenseItemsService, PrismaService],
})
export class ExpenseItemsModule {}
