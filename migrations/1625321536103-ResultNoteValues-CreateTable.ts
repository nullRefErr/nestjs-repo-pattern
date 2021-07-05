import { MigrationInterface, QueryRunner } from 'typeorm';
import { CreateTableHelper } from '../src/helper/MigrationHelpers';

export class ResultNoteValuesCreateTable1625321536103
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const columns = [
      {
        name: 'name',
        type: 'varchar',
      },
    ];
    CreateTableHelper(columns, queryRunner, 'Result_Note_Values');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE Result_Notes`);
  }
}
