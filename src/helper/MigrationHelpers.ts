import { QueryRunner, Table } from 'typeorm';

export async function CreateTableHelper(
  extraColumns: Array<any>,
  queryRunner: QueryRunner,
  name: string,
): Promise<void> {
  await queryRunner.createTable(
    new Table({
      name: name,
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isArray: false,
          isGenerated: true,
          generationStrategy: 'uuid',
        },
        {
          name: 'created_at',
          type: 'date',
        },
        {
          name: 'created_by',
          type: 'varchar',
        },
        {
          name: 'updated_at',
          type: 'date',
        },
        {
          name: 'updated_by',
          type: 'varchar',
        },
        ...extraColumns,
      ],
    }),
  );
}
