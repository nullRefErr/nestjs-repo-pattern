import { Injectable } from '@nestjs/common';
import GenericParams from 'src/lib/contract/genericParams';
import GenericResponse from 'src/lib/contract/genericResponse';
import Service from 'src/lib/service/service';
import petModel from './entities/pet.model';

@Injectable()
export default class PetsService implements Service<petModel> {
  create(param: GenericParams<petModel>): Promise<GenericResponse<petModel>> {
    throw new Error('Method not implemented.');
  }
  async read(
    param: GenericParams<petModel>,
  ): Promise<GenericResponse<petModel>> {
    console.log(param.id);

    const result = new GenericResponse<petModel>();
    result.entity = new petModel();
    result.entity.id = String(Date.now());
    result.entity.name = 'Lokum';

    result.entities = [];
    result.entities.push(result.entity);

    result.status = true;

    return result;
  }
  readById(param: GenericParams<petModel>): Promise<GenericResponse<petModel>> {
    throw new Error('Method not implemented.');
  }
  update(param: GenericParams<petModel>): Promise<GenericResponse<petModel>> {
    throw new Error('Method not implemented.');
  }
  delete(param: GenericParams<petModel>): Promise<GenericResponse<petModel>> {
    throw new Error('Method not implemented.');
  }
}
