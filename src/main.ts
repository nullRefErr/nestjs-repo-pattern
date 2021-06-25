import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { swagger } from './docModule/Swagger'
import { sentry } from './tracingModule/Sentry'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  swagger(app) //initialize swagger
  
  sentry(app) //initialize sentry
   
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT');

  await app.listen(port);
  console.log(`App listening => http://localhost:${port}/`);
}
bootstrap();