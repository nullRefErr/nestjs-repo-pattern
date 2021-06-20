import { Test, TestingModule } from '@nestjs/testing';
import GenericParams from '../../../lib/contract/genericParams';
import GenericResponse from '../../../lib/contract/genericResponse';
import { PetsController } from '../pets.controller';
import PetsService from '../pets.service';

describe('PetsController', () => {
  let controller: PetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetsController],
      providers: [PetsService, GenericParams, GenericResponse],
    }).compile();

    controller = module.get<PetsController>(PetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
