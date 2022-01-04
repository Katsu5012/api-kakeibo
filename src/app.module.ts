import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { ExpenseItemsController } from './expense-items/expense-items.controller';
import { ExpenseItemsService } from './expense-items/expense-items.service';
import { ExpenseItemsModule } from './expense-items/expense-items.module';
import { PaymentMethodsController } from './payment-methods/payment-methods.controller';
import { PaymentMethodsService } from './payment-methods/payment-methods.service';
import { PaymentMethodsModule } from './payment-methods/payment-methods.module';
import { DisbursementsController } from './disbursements/disbursements.controller';
import { DisbursementsService } from './disbursements/disbursements.service';
import { DisbursementsModule } from './disbursements/disbursements.module';

@Module({
  imports: [
    UsersModule,
    ExpenseItemsModule,
    PaymentMethodsModule,
    DisbursementsModule,
  ],
  controllers: [
    AppController,
    UsersController,
    ExpenseItemsController,
    PaymentMethodsController,

    DisbursementsController,
  ],
  providers: [
    AppService,
    UsersService,
    ExpenseItemsService,
    PaymentMethodsService,
    DisbursementsService,
  ],
})
export class AppModule {}
