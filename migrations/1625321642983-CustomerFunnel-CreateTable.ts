import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';
import { CreateTableHelper } from '../src/helper/MigrationHelpers';

export class CustomerFunnelCreateTable1625321642983
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const columns = [
      {
        name: 'customer_id',
        type: 'int',
      },
      {
        name: 'event_description',
        type: 'varchar',
        isNullable: true,
      },
      {
        name: 'event_type_id',
        type: 'bigint',
      },
    ];
    await CreateTableHelper(columns, queryRunner, 'Customer_Funnel', {
      foreignKeys: [
        new TableForeignKey({
          columnNames: ['event_type_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'Event_Type',
        }),
      ],
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `ALTER TABLE Customer_Funnel DROP FOREIGN KEY event_type_id`,
    );
    queryRunner.query(`DROP TABLE Customer_Funnel`);
  }
}
