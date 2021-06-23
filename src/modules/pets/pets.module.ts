import { Module } from '@nestjs/common';
import PetsService from './pets.service';
import { PetsController } from './pets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pets } from 'src/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Pets])],
  controllers: [PetsController],
  providers: [PetsService],
})
export class PetsModule {}
