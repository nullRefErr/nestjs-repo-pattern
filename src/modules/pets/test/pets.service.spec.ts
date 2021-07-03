import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Pets } from 'src/entities/Pets';
import { Repository } from 'typeorm';
import PetsService from '../pets.service';

const pet1 = new Pets();
pet1.bday = '3';
pet1.id = 1;
pet1.name = 'Lokum';

const petArray = [pet1];

describe('PetsService', () => {
  let service: PetsService;
  let repo: Repository<Pets>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PetsService,
        ConfigService,
        {
          provide: getRepositoryToken(Pets),
          useValue: {
            find: jest.fn().mockResolvedValue(petArray),
          },
        },
      ],
    }).compile();
    service = module.get<PetsService>(PetsService);
    repo = module.get<Repository<Pets>>(getRepositoryToken(Pets));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('GetAll', () => {
    it('should return an array of pets', async () => {
      const pets = await service.GetAll();
      expect(pets).toEqual(petArray);
    });
  });
});
