import Entity from 'src/lib/entity/entityBase';
import GenericParams from '../../contract/genericParams';
import GenericResponse from '../../contract/genericResponse';

interface IService<T extends Entity> {
  create(param: GenericParams<T>): Promise<GenericResponse<T>>;
  read(param: GenericParams<T>): Promise<GenericResponse<T>>;
  readById(param: GenericParams<T>): Promise<GenericResponse<T>>;
  update(param: GenericParams<T>): Promise<GenericResponse<T>>;
  delete(param: GenericParams<T>): Promise<GenericResponse<T>>;
}

export default IService;
