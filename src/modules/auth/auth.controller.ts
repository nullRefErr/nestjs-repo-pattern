import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private configService: ConfigService) {}
  @UseGuards(AuthGuard('jwt'))
  @Post('login')
  async login(@Req() req) {
    return req.user;
  }
}
