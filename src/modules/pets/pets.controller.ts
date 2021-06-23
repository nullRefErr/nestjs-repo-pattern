import { Controller, Get, Param } from '@nestjs/common';
import { Pets } from 'src/entities';
import PetsService from './pets.service';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Get()
  async Pets(): Promise<Pets[]> {
    return this.petsService.read();
  }
  @Get()
  async Pet(): Promise<Pets[]> {
    return this.petsService.read();
  }
}
