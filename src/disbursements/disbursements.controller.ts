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
  /**
   * createDisbursement
   * 支出作成
   * @param data
   * @returns
   */
  @Post()
  async createDisbursement(@Body() data: any): Promise<any> {
    const disbursement = await this.disbursementsService.createDisbursement(
      data,
    );
    return data;
  }

  /**
   * getDisbursement
   * 支出取得
   * @param id
   * @returns
   */
  @Get(':id')
  async getDisbursement(@Param('id') id: number): Promise<any> {
    const disbursement = await this.disbursementsService.getDisbursement(id);
    if (!disbursement) {
      throw new NotFoundException();
    }
    return disbursement;
  }

  /**
   * updateDisbursement
   * 支出編集
   * @param id
   * @param data
   * @returns
   */
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

  /**
   * deleteDisbursement
   * 支出削除
   * @param id
   * @returns
   */
  @Delete('id')
  async deleteDisbursement(@Param('id') id: number): Promise<any> {
    const disbursement = await this.disbursementsService.deleteDisbursement(id);
    if (!disbursement) {
      throw new NotFoundException();
    }
    return disbursement;
  }
}
