import { Controller, Get, UseGuards } from '@nestjs/common';
import type { Request } from 'express';
import { JwtGuard } from '../auth/guard';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import type { User } from '@prisma/client';

@Controller('user')
export class UserController {
  @UseGuards(JwtGuard)
  @Get('profile')
  getUser(@GetUser() user: User) {
    return { user: user };
  }
}
