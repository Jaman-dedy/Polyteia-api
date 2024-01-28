import { MigrationInterface, QueryRunner } from 'typeorm';

export class PopulationData1706370485809 implements MigrationInterface {
  name = 'PopulationData1706370485809';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "population_data" ("id" SERIAL NOT NULL, "numericData" numeric NOT NULL, CONSTRAINT "PK_910c9b562b95288930daeaf399f" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "population_data"`);
  }
}
