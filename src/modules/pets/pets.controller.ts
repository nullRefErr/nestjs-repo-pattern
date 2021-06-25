import { Controller, Get, Param, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pets } from 'src/entities';
import PetsService from './pets.service';

@Controller('pets')
export class PetsController {
  constructor(
    private readonly petsService: PetsService,
    private configService: ConfigService,
  ) {}

  @Get()
  async Pets(): Promise<Pets[]> {
    return this.petsService.GetAll();
  }
  @Get() //added to test sentry
  getError(): string {
    /*
    try { 
      throw new InternalServerErrorException();
    } catch (e) {
      console.log(e)
      Sentry.captureException(e)
    }
    */
    throw new InternalServerErrorException();
    return this.petsService.getError();
  }
}
