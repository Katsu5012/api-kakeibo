import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
  Put,
  Delete,
} from '@nestjs/common';
import { DisbursementsService } from './disbursements.service';

import { Disbursement } from '.prisma/client';
@Controller('disbursements')
export class DisbursementsController {
  constructor(private readonly disbursementsService: DisbursementsService) {}

  @Post()
  async createDisbursement(@Body() data: any): Promise<any> {
    const disbursement = await this.disbursementsService.createDisbursement(
      data,
    );
    return data;
  }

  @Get(':id')
  async getDisbursement(@Param('id') id: number): Promise<any> {
    const disbursement = await this.disbursementsService.getDisbursement(id);
    if (!disbursement) {
      throw new NotFoundException();
    }
    return disbursement;
  }

  @Put('id')
  async updateDisbursement(@Param('id') id: number, @Body() data: any) {
    const disbursement = await this.disbursementsService.updateDisbursement(
      id,
      data,
    );
    if (!disbursement) {
      throw new NotFoundException();
    }
    return disbursement;
  }

  @Delete('id')
  async deleteDisbursement(@Param('id') id: number): Promise<any> {
    const disbursement = await this.disbursementsService.deleteDisbursement(id);
    if (!disbursement) {
      throw new NotFoundException();
    }
    return disbursement;
  }
}
