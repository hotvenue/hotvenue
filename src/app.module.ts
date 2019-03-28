import { ConfigModule, ConfigService } from 'nestjs-config';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.resolveRootPath(__dirname).load('config/**/!(*.d).{ts,js}'),
    TypeOrmModule.forRootAsync({
      useFactory: async (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
    }),
    UserModule,
  ],
})
export class AppModule {}
