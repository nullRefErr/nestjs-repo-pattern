import { Resolver, Query } from '@nestjs/graphql';
import { Pets } from 'src/entities/Pets';
import { CustomLogger } from '../loggerModule/logger.service';
import PetsService from './pets.service';

@Resolver(() => Pets)
export class PetsResolver {
  constructor(
    private petsService: PetsService,
    private loggerService: CustomLogger,
  ) {}

  @Query(() => [Pets])
  async pets() {
    return this.petsService.GetAll();
  }
}
