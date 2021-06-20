import { Controller, Get, Param } from '@nestjs/common';
import GenericParams from '../../lib/contract/genericParams';
import GenericResponse from '../../lib/contract/genericResponse';
import petModel from './entities/pet.model';
import PetsService from './pets.service';

@Controller('pets')
export class PetsController {
  constructor(
    private readonly petsService: PetsService,
    private readonly genericResponse: GenericResponse<petModel>,
    private readonly genericParams: GenericParams<petModel>,
  ) {}

  @Get(':id')
  async Pets(@Param('id') id: string): Promise<GenericResponse<petModel>> {
    this.genericParams.id = id;
    this.genericResponse.tag = await this.petsService.read(this.genericParams);
    return this.genericResponse;
  }
}
