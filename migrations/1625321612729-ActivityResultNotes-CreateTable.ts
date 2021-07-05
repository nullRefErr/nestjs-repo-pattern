import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';
import { CreateTableHelper } from '../src/helper/MigrationHelpers';
export class ActivityResultNotesCreateTable1625321612729
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const columns = [
      {
        name: 'activity_id',
        type: 'bigint',
      },
      {
        name: 'result_note_id',
        type: 'bigint',
      },
    ];
    CreateTableHelper(columns, queryRunner, 'Activity_Result_Notes');

    const foreignKey = new TableForeignKey({
      columnNames: ['activity_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'Activity',
    });
    await queryRunner.createForeignKey('Activity_Result_Notes', foreignKey);

    const foreignKey2 = new TableForeignKey({
      columnNames: ['result_note_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'Result_Notes',
    });
    await queryRunner.createForeignKey('Activity_Result_Notes', foreignKey2);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `ALTER TABLE Activity_Result_Notes DROP FOREIGN KEY activity_id`,
    );
    queryRunner.query(
      `ALTER TABLE Activity_Result_Notes DROP FOREIGN KEY result_note_id`,
    );
    queryRunner.query(`DROP TABLE Activity_Result_Notes`);
  }
}
