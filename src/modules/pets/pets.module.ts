import { Module } from '@nestjs/common';
import PetsService from './pets.service';
import { PetsController } from './pets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Pets } from 'src/entities/Pets';

@Module({
  imports: [TypeOrmModule.forFeature([Pets]), ConfigModule],
  controllers: [PetsController],
  providers: [PetsService],
})
export class PetsModule {}
