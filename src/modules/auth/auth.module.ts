import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.auth';
import { GoogleStrategy } from './strategies/google.strategy';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [PassportModule],
  providers: [AuthService, LocalStrategy, GoogleStrategy, ConfigService],
})
export class AuthModule {}
