import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { config } from 'node-config-ts';

import { AppModule } from './app.module';

const { version } = require('../package');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('HotVenue')
    .setDescription('APIs for the HotVenue app')
    .setVersion(version)
    .addTag('user')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(config.server.port || 3000);
}
bootstrap();
