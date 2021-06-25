import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Pets } from 'src/entities';
import { Repository } from 'typeorm';
import PetsService from '../pets.service';

const petArray = [
  new Pets('Test Cat 2', 'Test Breed 2', '3'),
  new Pets('Test Cat 3', 'Test Breed 3', '2'),
];

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
    // repo = module.get<Repository<Pets>>(getRepositoryToken(Pets));

    service = module.get<PetsService>(PetsService);
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
