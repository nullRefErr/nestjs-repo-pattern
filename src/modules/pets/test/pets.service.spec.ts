import { Test, TestingModule } from '@nestjs/testing';
import GenericParams from '../../../lib/contract/genericParams';
import GenericResponse from '../../../lib/contract/genericResponse';
import PetsService from '../pets.service';

describe('PetsService', () => {
  let service: PetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PetsService, GenericParams, GenericResponse],
    }).compile();

    service = module.get<PetsService>(PetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
