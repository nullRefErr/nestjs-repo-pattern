import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function swagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('24 Saatte Is Admin Project')
    .setDescription('Project API description')
    .setVersion('0.1')
    .addTag('pets')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document); //Swagger UI can be reached from http://localhost:3000/doc
}
