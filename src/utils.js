import { resolve } from 'path';

export const Constants = {
  SCHEMA_DIR: 'schema',
};

export const schemaPath = (filename) => resolve(process.cwd(), Constants.SCHEMA_DIR, filename);
