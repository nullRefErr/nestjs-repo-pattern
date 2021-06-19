import Entity from 'src/lib/entity/entityBase';
import GenericParams from '../../contract/genericParams';
import GenericResponse from '../../contract/genericResponse';

interface IService<T extends Entity> {
  create(param: GenericParams<T>): GenericResponse<T>;
  read(param: GenericParams<T>): GenericResponse<T>;
  readById(param: GenericParams<T>): GenericResponse<T>;
  update(param: GenericParams<T>): GenericResponse<T>;
  delete(param: GenericParams<T>): GenericResponse<T>;
}

export default IService;
