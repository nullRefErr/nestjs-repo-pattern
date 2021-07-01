import { Controller, Get, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { Pets } from 'src/entities/Pets';
import PetsService from './pets.service';
import { Relations } from 'src/entities/Relations';

@Controller('pets')
export class PetsController {
  constructor(
    private readonly petsService: PetsService,
    private configService: ConfigService,
  ) {}

  @Get()
  //@UseGuards(AuthGuard('jwt'))
  async Pets(): Promise<Pets[]> {
    return this.petsService.GetAll();
  }
  @Get('deneme')
  async Deneme(): Promise<Relations> {
    return this.petsService.Add();
  }
}
