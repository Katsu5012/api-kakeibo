import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ExpenseItemsModule } from './expense-items/expense-items.module';
import { PaymentMethodsModule } from './payment-methods/payment-methods.module';
import { DisbursementsModule } from './disbursements/disbursements.module';

@Module({
  imports: [
    UsersModule,
    ExpenseItemsModule,
    PaymentMethodsModule,
    DisbursementsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
