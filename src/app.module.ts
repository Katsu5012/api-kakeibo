import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ExpenseItemsModule } from './expense-items/expense-items.module';
import { PaymentMethodsModule } from './payment-methods/payment-methods.module';
import { DisbursementsModule } from './disbursements/disbursements.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    ExpenseItemsModule,
    PaymentMethodsModule,
    DisbursementsModule,
    AuthModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
