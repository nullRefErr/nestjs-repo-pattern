import { Module } from '@nestjs/common';
import PetsService from './pets.service';
import { PetsController } from './pets.controller';
import GenericParams from 'src/lib/contract/genericParams';
import GenericResponse from 'src/lib/contract/genericResponse';

@Module({
  controllers: [PetsController],
  providers: [PetsService, GenericParams, GenericResponse],
})
export class PetsModule {}
