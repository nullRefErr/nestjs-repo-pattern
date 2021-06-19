import Entity from '../../entity/entityBase';

interface IGenericParams<T extends Entity> {
  entity: T;
  entities: T[];
  status: boolean;
  tag: any;
  id: number;
}

export default IGenericParams;
