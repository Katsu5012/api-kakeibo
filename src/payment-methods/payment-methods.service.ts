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
}
