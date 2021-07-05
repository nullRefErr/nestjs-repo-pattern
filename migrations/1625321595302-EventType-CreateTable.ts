import { MigrationInterface, QueryRunner } from 'typeorm';
import { CreateTableHelper } from '../src/helper/MigrationHelpers';

export class EventTypeCreateTable1625321595302 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const columns = [
      {
        name: 'name',
        type: 'varchar',
      },
      {
        name: 'icon',
        type: 'varchar',
      },
    ];
    await CreateTableHelper(columns, queryRunner, 'Event_Type');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE Event_Type`);
  }
}
