import { Disbursement, Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class DisbursementsService {
  constructor(private readonly prisma: PrismaService) {}

  async createDisbursement(
    data: Prisma.DisbursementCreateInput,
  ): Promise<Disbursement> {
    return this.prisma.disbursement.create({
      data,
    });
  }

  async getDisbursement(id: number): Promise<Disbursement> {
    return this.prisma.disbursement.findUnique({
      where: { id },
    });
  }

  async updateDisbursement(
    id: number,
    data: Prisma.DisbursementUpdateInput,
  ): Promise<Disbursement> {
    return this.prisma.disbursement.update({ where: { id }, data });
  }

  async deleteDisbursement(id: number): Promise<Disbursement> {
    return this.prisma.disbursement.delete({ where: { id } });
  }
}
