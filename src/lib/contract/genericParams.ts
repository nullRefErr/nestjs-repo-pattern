import { Injectable } from '@nestjs/common';
import Entity from '../entity/entityBase';
import IGenericParams from './interfaces/genericParam.interface';

@Injectable()
class GenericParams<T extends Entity> implements IGenericParams<T> {
  entity: T;
  entities: T[];
  status: boolean;
  tag: any;
  id: string;
}

export default GenericParams;
