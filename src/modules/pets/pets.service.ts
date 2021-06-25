import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Pets } from 'src/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Injectable()
export default class PetsService {
  constructor(
    @InjectRepository(Pets)
    private petsRepository: Repository<Pets>,
    private configService: ConfigService,
  ) {}

  async GetAll(): Promise<Pets[]> {
    return this.petsRepository.find();
  }
  getError() : string { //added to test sentry
    return 'error'
  }
}
