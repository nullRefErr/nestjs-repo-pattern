import { QueryRunner, Table } from 'typeorm';
import { MigrationOptions } from '../types/Types';
export async function CreateTableHelper(
  extraColumns: Array<any>,
  queryRunner: QueryRunner,
  name: string,
  options?: MigrationOptions,
): Promise<void> {
  await queryRunner.createTable(
    new Table({
      name: name,
      columns: [
        {
          name: 'id',
          type: 'bigint',
          isArray: false,
          isGenerated: true,
          generationStrategy: 'increment',
          isPrimary: true,
        },
        {
          name: 'created_at',
          type: 'datetime',
        },
        {
          name: 'created_by',
          type: 'bigint',
        },
        {
          name: 'updated_at',
          type: 'datetime',
          isNullable: true,
        },
        {
          name: 'updated_by',
          type: 'bigint',
          isNullable: true,
        },
        {
          name: 'deleted_at',
          type: 'datetime',
          isNullable: true,
        },
        ...extraColumns,
      ],
    }),
  );
  if (options && options.foreignKeys) {
    for (const foreignKey of options.foreignKeys) {
      await queryRunner.createForeignKey(name, foreignKey);
    }
  }
}
