import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Pets } from 'src/entities/Pets';

@Injectable()
export default class PetsService {
  constructor(
    @InjectRepository(Pets)
    private petsRepository: Repository<Pets>,
    private configService: ConfigService,
  ) {}

  async GetAll(): Promise<Pets[]> {
    const pet = new Pets();
    pet.bday = '1231';
    pet.name = 'eren';
    pet.id = 1;
    pet.createdBy = 1;
    pet.createdAt = new Date();

    return [pet];
  }
}
