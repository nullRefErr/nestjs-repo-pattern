import {MigrationInterface, QueryRunner, Table} from "typeorm";
import {CreateTableHelper} from "../src/helper/MigrationHelpers"
export class petsUpdate1624976654340 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const cols = [{
            name: 'name',
            type: 'varchar',
          },
          {
              name: 'bday',
              type: 'varchar',
          },]
          CreateTableHelper(cols, queryRunner, "Pets")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE Pets`);
    }

}
