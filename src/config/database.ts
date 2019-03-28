import { join } from 'path';

import app from './app';

const url = process.env.DATABASE_URL;

export default {
  url,
  type: url ? 'postgres' : 'sqlite',
  synchronize: !url,

  entities: [`${__dirname}/../**/*.entity{.ts,.js}`],

  get database() {
    if (app.isTest) {
      return ':memory:';
    }

    return url ? null : join(__dirname, '..', '..', 'data', 'hotvenue.db');
  },
};
