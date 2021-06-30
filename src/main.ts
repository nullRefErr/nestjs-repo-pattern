import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { swagger } from './docModule/Swagger';
import { sentry } from './tracingModule/Sentry';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  swagger(app); //initialize swagger
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT');

  const dsn = configService.get<string>('DSN');
  const tsr = configService.get<number>('TRACES_SAMPLE_RATE');

  sentry(app, dsn, tsr);

  await app.listen(port);
  console.log(`App listening => http://localhost:${port}/`);
}
bootstrap();
