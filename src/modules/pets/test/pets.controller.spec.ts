import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { Pets } from 'src/entities/Pets';
import { CustomLogger } from 'src/modules/loggerModule/logger.service';
import { PetsController } from '../pets.controller';
import PetsService from '../pets.service';

const pet1 = new Pets();
pet1.bday = '3';
pet1.id = 1;
pet1.name = 'Lokum';

const petArray = [pet1];
describe('PetsController', () => {
  let controller: PetsController;
  let service: PetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetsController],
      providers: [
        PetsService,
        ConfigService,
        CustomLogger,
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
