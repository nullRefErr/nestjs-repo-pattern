import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Pets } from 'src/entities/Pets';
import { RelationsRepository } from 'src/entityRepositories/RelationsRepository';
import { Relations } from 'src/entities/Relations';
import { Task } from 'src/entities/Task';
import { User } from 'src/entities/User';
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
    let TT = new TaskType();
    TT.name = 't';
    TT.icon = '/t/t';
    TT.createdBy = 1;
    TT.updatedBy = 1;
    TT = await TT.save();
    let u = new User();
    u.email = 'a';
    u.fullname = 'b';
    u.createdBy = 1;
    u.language = 'en';
    u.updatedBy = 1;
    u.countryId = 1;
    u = await u.save();
    let t = new Task();
    t.startedTime = new Date();
    t.name = 'task';
    t.assignee = u;
    t.reporter = u;
    t.countryId = 1;
    t.customerId = 1;
    t.typeId = TT;
    t.createdBy = 1;
    t.updatedBy = 1;
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
