import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { swagger } from './docModule/Swagger'
import { sentry } from './tracingModule/Sentry'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  swagger(app) //initialize swagger
  
  sentry(app) //initialize sentry
  
  await app.listen(3000);
  console.log('App listening => http://localhost:3000/');
}
bootstrap();