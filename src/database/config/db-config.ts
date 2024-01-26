import { registerAs } from '@nestjs/config';
import { DatabaseConfig } from './db-config.type';

export default registerAs<DatabaseConfig>('database', () => {
  return {
    type: process.env.TYPE,
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  };
});
