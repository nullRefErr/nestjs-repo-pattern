import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pets } from 'src/entities';
import { Connection } from 'typeorm';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      entities: [Pets],
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'qwertyu123',
      database: 'testDb',
      synchronize: true,
    }),
    PetsModule,
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
  
}
