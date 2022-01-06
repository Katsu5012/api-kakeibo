import { paymentMethod } from '.prisma/client';
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
import { PaymentMethodsService } from './payment-methods.service';
@Controller('payment-methods')
export class PaymentMethodsController {
  constructor(private readonly paymentMethodsService: PaymentMethodsService) {}

  /**
   * createPaymentMethod
   * 新規支払い方法追加
   * @param body
   * @returns
   */
  @Post()
  async createPaymentMethod(@Body() body: any): Promise<paymentMethod> {
    return this.paymentMethodsService.createPaymentMethod(body);
  }

  /**
   * getPaymentMethod
   * 支払い方法取得
   * @param id
   * @returns
   */
  @Get(':id')
  async getPaymentMethod(@Param('id') id: number) {
    const paymentMethod = await this.paymentMethodsService.getPaymentMethod(
      Number(id),
    );
    if (!paymentMethod) {
      throw new NotFoundException();
    }
    return paymentMethod;
  }

  /**
   * updatePaymentMetho
   * 支払い方法名称変更
   * @param id
   * @param paymentMethodName
   * @returns
   */
  @Put('id')
  async updatePaymentMethod(
    @Param('id') id: number,
    @Body() paymentMethodName: string,
  ): Promise<paymentMethod> {
    const paymentMethod = await this.paymentMethodsService.updatePaymentMethod(
      id,
      paymentMethodName,
    );
    if (!paymentMethod) {
      throw new NotFoundException();
    }
    return paymentMethod;
  }
  /**
   * deletePaymentMethod
   * 支払い方法削除
   * @param id
   * @returns
   */

  @Delete('id')
  async deletePaymentMethod(@Param('id') id: number) {
    const paymentMethod = await this.paymentMethodsService.deletePaymentMethod(
      id,
    );
    if (!paymentMethod) {
      throw new NotFoundException();
    }
    return paymentMethod;
  }

  //   @Get(':id')
  //   async getMonthlyPaymentMethod(@Param() id: number): Promise<any> {
  //     const today = new Date();
  //     console.log(today);
  //     const thisYear = today.getFullYear();
  //     const thisMonth = today.getMonth() + 1;
  //     const halfAYearAgo = new Date(thisYear, thisMonth - 1, 1);
  //     halfAYearAgo.setDate(halfAYearAgo.getDate() + 1);
  //     halfAYearAgo.setMonth(halfAYearAgo.getMonth() - 5);
  //     return { id, halfAYearAgo };
  //   }
}
