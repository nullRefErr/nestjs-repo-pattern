import Entity from '../../entity/entityBase';

interface IGenericResponse<T extends Entity> {
  entity: T;
  entities: T[];
  status: boolean;
  tag: any;
}

export default IGenericResponse;
