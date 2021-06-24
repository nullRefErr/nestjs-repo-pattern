import { Controller, Get, Param, InternalServerErrorException } from '@nestjs/common';
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
