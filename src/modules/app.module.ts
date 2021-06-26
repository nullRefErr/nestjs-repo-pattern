import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import DatabaseConfig from 'src/config/database.config';
import { Connection } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(DatabaseConfig),
    PetsModule,
    AuthModule,
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
