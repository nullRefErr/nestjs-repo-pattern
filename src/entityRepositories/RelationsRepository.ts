import { EntityRepository } from 'typeorm';
import { Relations } from '../entities/Relations';
import { AbstractPolymorphicRepository } from 'typeorm-polymorphic';
@EntityRepository(Relations)
export class RelationsRepository extends AbstractPolymorphicRepository<Relations> {}
