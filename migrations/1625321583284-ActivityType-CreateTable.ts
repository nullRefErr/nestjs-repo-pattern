import { MigrationInterface, QueryRunner } from 'typeorm';
import { CreateTableHelper } from '../src/helper/MigrationHelpers';

export class ActivityTypeCreateTable1625321583284
  implements MigrationInterface
{
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
    await CreateTableHelper(columns, queryRunner, 'Activity_Type');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE Activity_Type`);
  }
}
