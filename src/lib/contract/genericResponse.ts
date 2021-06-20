import { Injectable } from '@nestjs/common';
import Entity from '../entity/entityBase';
import IGenericResponse from './interfaces/genericResponse.iterface';

@Injectable()
class GenericResponse<T extends Entity> implements IGenericResponse<T> {
  entity: T;
  entities: T[];
  status: boolean;
  tag: any;
}

export default GenericResponse;
