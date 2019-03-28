const env = process.env.NODE_ENV || 'development';

const isDev = env === 'development';

export default {
  env,
  isDev,

  port: process.env.PORT || 3000,

  logformat: isDev ? 'dev' : 'combined',

  isTest: env === 'test',
  isProd: env === 'production',
};
