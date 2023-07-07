import 'dotenv/config';
import { Knex, knex as setupKnex } from 'knex';

export const config: Knex.Config =
{
  client: 'mssql',
  connection: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PWD,
    requestTimeout: 600000,
    database: process.env.DATABASE,
  }
}



export const knex = setupKnex(config);