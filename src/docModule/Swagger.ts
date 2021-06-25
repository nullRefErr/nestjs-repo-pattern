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
<<<<<<< HEAD
  SwaggerModule.setup('api', app, document); //Swagger UI can be reached from http://localhost:3000/api
}
=======
  SwaggerModule.setup('doc', app, document); //Swagger UI can be reached from http://localhost:3000/doc
}
>>>>>>> b5636987e2f995429c22cde7e460768508000aa5
