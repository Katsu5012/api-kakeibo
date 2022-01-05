import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DisbursementsController } from './disbursements.controller';
import { DisbursementsService } from './disbursements.service';
@Module({
  imports: [],
  controllers: [DisbursementsController],
  providers: [DisbursementsService, PrismaService],
})
export class DisbursementsModule {}
