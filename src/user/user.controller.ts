import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import type { Request } from 'express';

@Controller('user')
export class UserController {
  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getUser(@Req() req: Request) {
    return { user: req.user };
  }
}
