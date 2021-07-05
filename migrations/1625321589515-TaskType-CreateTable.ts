import { MigrationInterface, QueryRunner } from 'typeorm';
import { CreateTableHelper } from '../src/helper/MigrationHelpers';

export class TaskTypeCreateTable1625321589515 implements MigrationInterface {
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
    await CreateTableHelper(columns, queryRunner, 'Task_Type');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE Task_Type`);
  }
}
