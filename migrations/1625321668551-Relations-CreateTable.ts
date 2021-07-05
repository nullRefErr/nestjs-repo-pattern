import { MigrationInterface, QueryRunner } from 'typeorm';
import { CreateTableHelper } from '../src/helper/MigrationHelpers';
import { Type } from '../src/entities/Relations';
export class RelationsCreateTable1625321668551 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const columns = [
      {
        name: 'entity_id',
        type: 'bigint',
      },
      {
        name: 'entity_type',
        type: 'varchar',
      },
      {
        name: 'related_object_id',
        type: 'bigint',
      },
      {
        name: 'related_object_type',
        type: 'varchar',
      },
      {
        name: 'type',
        type: 'enum',
        enum: [Type.CLOSED_BY, Type.DEFAULT],
        enumName: 'Type',
        default: `'${Type.CLOSED_BY}'`,
      },
    ];
    await CreateTableHelper(columns, queryRunner, 'Relations');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE Relations`);
  }
}
