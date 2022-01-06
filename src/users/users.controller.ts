import { Body, Controller, Post } from '@nestjs/common';
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
}
