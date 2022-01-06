import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { paymentMethod, Prisma } from '@prisma/client';
@Injectable()
export class PaymentMethodsService {
  constructor(private readonly prisma: PrismaService) {}

  async createPaymentMethod(
    data: Prisma.paymentMethodCreateInput,
  ): Promise<paymentMethod> {
    return this.prisma.paymentMethod.create({
      data,
    });
  }

  async getPaymentMethod(id: number): Promise<paymentMethod> {
    return await this.prisma.paymentMethod.findUnique({ where: { id } });
  }

  async updatePaymentMethod(
    id: number,
    paymentMethodName: string,
  ): Promise<paymentMethod> {
    return await this.prisma.paymentMethod.update({
      where: { id },
      data: {
        paymentMethodName,
      },
    });
  }

  async deletePaymentMethod(id: number): Promise<paymentMethod> {
    return await this.prisma.paymentMethod.delete({ where: { id } });
  }

  // async getSixMonthPAymentMethodsSum(date: Date): Promise<any>{
  //   this.prisma.paymentMethod.getSixMonthPAymentMethodsSum(date)
  // }
}
