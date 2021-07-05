import { MigrationInterface, QueryRunner } from 'typeorm';
import { CreateTableHelper } from '../src/helper/MigrationHelpers';
import { Roles } from '../src/entities/User';
export class UserCreateTable1625321550622 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const columns = [
      {
        name: 'fullname',
        type: 'varchar',
        length: '100',
      },
      {
        name: 'email',
        type: 'varchar',
        length: '100',
      },
      {
        name: 'country_id',
        type: 'int',
      },
      {
        name: 'language',
        type: 'varchar',
      },
      {
        name: 'roles',
        type: 'enum',
        enum: [Roles.MANAGEMENT_USER, Roles.OPERATION_PLUS, Roles.OPERATION],
        enumName: 'Roles',
        default: `'${Roles.OPERATION}'`,
      },
    ];
    await CreateTableHelper(columns, queryRunner, 'User');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE User`);
  }
}
