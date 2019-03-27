import { config } from 'node-config-ts';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  // @ts-ignore
  imports: [TypeOrmModule.forRoot({
    ...config.database,

    entities: [`${__dirname}/**/*.entity{.ts,.js}`],
  }), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
