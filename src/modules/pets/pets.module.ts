import { Module } from '@nestjs/common';
import PetsService from './pets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Pets } from 'src/entities/Pets';
import { CustomLogger } from '../loggerModule/logger.service';
import { PetsResolver } from './pets.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Pets]), ConfigModule],
  providers: [PetsService, CustomLogger, PetsResolver],
})
export class PetsModule {}
