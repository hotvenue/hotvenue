import { config } from 'node-config-ts';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './user/user.module';

@Module({
  imports: [
    // @ts-ignore
    TypeOrmModule.forRoot({
      ...config.database,

      entities: [`${__dirname}/**/*.entity{.ts,.js}`],
    }),
    UserModule,
  ],
})
export class AppModule {}
