import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

const { description, version } = require('../package');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('HotVenue')
    .setDescription(description)
    .setVersion(version)
    .addTag('user')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  console.log(app.get('ConfigService').get('app.port'));

  await app.listen(app.get('ConfigService').get('app.port'));
}
bootstrap();
