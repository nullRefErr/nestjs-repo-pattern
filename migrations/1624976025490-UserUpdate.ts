import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class UserUpdate1624976025490 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'user',
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
                  name: 'username',
                  type: 'varchar',
                },
                {
                    name: 'password',
                    type: 'varchar',
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
                
              ],
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`DROP TABLE user`);
    }

}
