import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';
import { Status } from '../src/entities/Task';
import { CreateTableHelper } from '../src/helper/MigrationHelpers';
export class TaskCreateTable1625321652024 implements MigrationInterface {
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
        name: 'status',
        type: 'enum',
        enum: [Status.CLOSED, Status.TODO],
        enumName: 'Status',
        default: `'${Status.TODO}'`,
      },
      {
        name: 'customer_id',
        type: 'int',
        isNullable: true,
      },
      {
        name: 'started_time',
        type: 'datetime',
      },
      {
        name: 'closed_time',
        type: 'datetime',
        isNullable: true,
      },
      {
        name: 'due_date',
        type: 'datetime',
        isNullable: true,
      },
      {
        name: 'country_id',
        type: 'int',
      },
      {
        name: 'type_id',
        type: 'bigint',
      },
      {
        name: 'assignee_id',
        type: 'bigint',
      },
    ];
    await CreateTableHelper(columns, queryRunner, 'Task', {
      foreignKeys: [
        new TableForeignKey({
          columnNames: ['type_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'Task_Type',
        }),
        new TableForeignKey({
          columnNames: ['assignee_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'User',
        }),
      ],
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`ALTER TABLE Task DROP FOREIGN KEY type_id`);
    queryRunner.query(`ALTER TABLE Task DROP FOREIGN KEY assignee_id`);
    queryRunner.query(`DROP TABLE Task`);
  }
}
