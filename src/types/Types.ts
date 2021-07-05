import { TableForeignKey } from 'typeorm';
export type MigrationOptions = {
  foreignKeys?: TableForeignKey[];
};
