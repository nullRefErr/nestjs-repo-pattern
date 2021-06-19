import { Injectable } from '@nestjs/common';
import GenericParams from 'src/lib/contract/genericParams';
import GenericResponse from 'src/lib/contract/genericResponse';
import Service from 'src/lib/service/service';
import AppEntity from './app.model';

@Injectable()
export class AppService implements Service<AppEntity> {
  create(param: GenericParams<AppEntity>): GenericResponse<AppEntity> {
    throw new Error('Method not implemented.');
  }
  read(param: GenericParams<AppEntity>): GenericResponse<AppEntity> {
    const result = new GenericResponse<AppEntity>();
    result.id = param.id;
    result.entity = new AppEntity();
    result.entity.name = 'Eren';

    return result;
  }
  readById(param: GenericParams<AppEntity>): GenericResponse<AppEntity> {
    throw new Error('Method not implemented.');
  }
  update(param: GenericParams<AppEntity>): GenericResponse<AppEntity> {
    throw new Error('Method not implemented.');
  }
  delete(param: GenericParams<AppEntity>): GenericResponse<AppEntity> {
    throw new Error('Method not implemented.');
  }
}
