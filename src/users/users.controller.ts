import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() body: any): Promise<User> {
    return this.usersService.create(body);
  }

  /**
   * TODO
   * 認証作成してからログインユーザーのCRUD作成
   */
  // TODO   getMe 削除
  @Get()
  async getMe() {
    return await this.usersService.getMe(1);
  }
}
