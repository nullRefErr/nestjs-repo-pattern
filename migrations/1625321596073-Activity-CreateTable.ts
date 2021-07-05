import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';
import { CreateTableHelper } from '../src/helper/MigrationHelpers';
export class ActivityCreateTable1625321596073 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const columns = [
      {
        name: 'name',
        type: 'varchar',
      },
      {
        name: 'description',
        type: 'varchar',
        isNullable: true,
      },
      {
        name: 'customer_id',
        type: 'int',
      },
      {
        name: 'activity_time',
        type: 'datetime',
      },
      {
        name: 'country_id',
        type: 'int',
      },
      {
        name: 'type_id',
        type: 'bigint',
      },
    ];
    await CreateTableHelper(columns, queryRunner, 'Activity', {
      foreignKeys: [
        new TableForeignKey({
          columnNames: ['type_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'Activity_Type',
        }),
      ],
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`ALTER TABLE Activity DROP FOREIGN KEY type_id`);
    queryRunner.query(`DROP TABLE Activity`);
  }
}
