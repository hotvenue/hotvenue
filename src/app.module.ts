import { config } from 'node-config-ts';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  // @ts-ignore
  imports: [TypeOrmModule.forRoot({
    ...config.database,

    entities: [`${__dirname}/**/*.entity{.ts,.js}`],
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
