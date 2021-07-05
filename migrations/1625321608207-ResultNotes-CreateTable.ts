import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';
import { CreateTableHelper } from '../src/helper/MigrationHelpers';

export class ResultNotesCreateTable1625321608207 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const columns = [
      {
        name: 'name',
        type: 'varchar',
      },
      {
        name: 'result_note_value_id',
        type: 'bigint',
      },
    ];
    await CreateTableHelper(columns, queryRunner, 'Result_Notes', {
      foreignKeys: [
        new TableForeignKey({
          columnNames: ['result_note_value_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'Result_Note_Values',
        }),
      ],
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `ALTER TABLE Result_Notes DROP FOREIGN KEY result_note_value_id`,
    );
    queryRunner.query(`DROP TABLE Result_Notes`);
  }
}
