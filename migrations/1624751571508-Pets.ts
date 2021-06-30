import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class PetsMigration1624751571508 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'Pets',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isArray: false,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'bday',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    queryRunner.query(`DROP TABLE article`);
  }
}
