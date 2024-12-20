import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import * as compression from 'compression';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.use(helmet());
  app.use(compression());

  const config = new DocumentBuilder()
    .setTitle('Percies Todo API Swagger')
    .setDescription('The Percies todo API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap().then(() => {
  new Logger('Bootstrap').log(`
  Server is listening on port 3000, environment= dev
  Click to http://localhost:3000/api to access the swagger
  `);
});
