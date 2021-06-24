import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Pets } from 'src/entities';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export default class PetsService {
  constructor(
    @InjectRepository(Pets)
    private petsRepository: Repository<Pets>,
  ) {}

  async read(): Promise<Pets[]> {
    const a = await this.petsRepository.find();
    return a;
  }
  getError() : string { //added to test sentry
    return 'error'
  }
}
