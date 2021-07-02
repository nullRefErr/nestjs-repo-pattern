import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Pets } from 'src/entities/Pets';
import { RelationsRepository } from 'src/entityRepositories/RelationsRepository';
import { Relations } from 'src/entities/Relations';
import { Task, Status } from 'src/entities/Task';
import { User, Roles } from 'src/entities/User';
import { TaskType } from 'src/entities/TaskType';

@Injectable()
export default class PetsService {
  constructor(
    @InjectRepository(Pets)
    @InjectRepository(RelationsRepository)
    private petsRepository: Repository<Pets>,
    private relationsRepository: RelationsRepository,
    private configService: ConfigService,
  ) {}

  async GetAll(): Promise<Pets[]> {
    return this.petsRepository.find();
    //const res = await this.relationsRepository.find();
    //return res;
  }
  async Add(): Promise<Relations> {
    let TT = new TaskType('t', '/t/t', 1);
    TT = await TT.save();

    const operationUser = Roles.OPERATION;
    let u = new User('b', 'a', 10, 'en', operationUser, 1);
    u = await u.save();

    const status = Status.TODO;
    let t = new Task('task1', 10, u, TT, 20, status, 5, new Date());
    t = await t.save();

    const results = await this.relationsRepository.create({
      owner: t,
      relatedObjectType: 'Activity',
      relatedObjectId: 1,
      createdBy: 1,
      updatedBy: 1,
    });
    await this.relationsRepository.save(results);
    console.log(results);
    return results;
  }
}
