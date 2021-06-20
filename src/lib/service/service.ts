/* eslint-disable @typescript-eslint/no-unused-vars */
import GenericParams from '../contract/genericParams';
import GenericResponse from '../contract/genericResponse';
import Entity from '../entity/entityBase';
import IService from './interface/service.interface';

class Service<T extends Entity> implements IService<T> {
  async create(param: GenericParams<T>): Promise<GenericResponse<T>> {
    throw new Error('Method not implemented.');
  }
  async read(param: GenericParams<T>): Promise<GenericResponse<T>> {
    throw new Error('Method not implemented.');
  }
  async readById(param: GenericParams<T>): Promise<GenericResponse<T>> {
    throw new Error('Method not implemented.');
  }
  async update(param: GenericParams<T>): Promise<GenericResponse<T>> {
    throw new Error('Method not implemented.');
  }
  async delete(param: GenericParams<T>): Promise<GenericResponse<T>> {
    throw new Error('Method not implemented.');
  }
}

export default Service;
