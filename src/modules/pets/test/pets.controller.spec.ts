import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { Pets } from 'src/entities';
import { PetsController } from '../pets.controller';
import PetsService from '../pets.service';

const petArray = [
  new Pets('Test Cat 2', 'Test Breed 2', '3'),
  new Pets('Test Cat 3', 'Test Breed 3', '2'),
];
describe('PetsController', () => {
  let controller: PetsController;
  let service: PetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetsController],
      providers: [
        PetsService,
        ConfigService,
        {
          provide: PetsService,
          useValue: {
            GetAll: jest.fn().mockReturnValue(petArray),
          },
        },
      ],
    }).compile();
    controller = module.get<PetsController>(PetsController);
    service = module.get<PetsService>(PetsService);

    controller = module.get<PetsController>(PetsController);
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('getCats', () => {
    it('should get an array of cats', async () => {
      await expect(controller.Pets()).resolves.toEqual(petArray);
    });
  });
});
