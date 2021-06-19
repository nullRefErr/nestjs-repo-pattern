/* eslint-disable @typescript-eslint/no-unused-vars */
import GenericParams from '../contract/genericParams';
import GenericResponse from '../contract/genericResponse';
import Entity from '../entity/entityBase';
import IService from './interface/service.interface';

class Service<T extends Entity> implements IService<T> {
  create(param: GenericParams<T>): GenericResponse<T> {
    throw new Error('Method not implemented.');
  }
  read(param: GenericParams<T>): GenericResponse<T> {
    throw new Error('Method not implemented.');
  }
  readById(param: GenericParams<T>): GenericResponse<T> {
    throw new Error('Method not implemented.');
  }
  update(param: GenericParams<T>): GenericResponse<T> {
    throw new Error('Method not implemented.');
  }
  delete(param: GenericParams<T>): GenericResponse<T> {
    throw new Error('Method not implemented.');
  }
}

export default Service;
