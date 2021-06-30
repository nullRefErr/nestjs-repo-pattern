import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql' as any,
        driver: 'mysql',
        database: configService.get<string>('TYPEORM_DATABASE'),
        port: configService.get<number>('TYPEORM_PORT'),
        username: configService.get<string>('TYPEORM_USERNAME'),
        password: configService.get<string>('TYPEORM_PASSWORD'),
        host: configService.get<string>('TYPEORM_HOST'),
        logging: configService.get<boolean>('TYPEORM_LOGGING'),
        synchronize: false,
        cli: {
          migrationsDir: 'dist/migrations/*{.ts,.js}',
        },
        entities: ['**/dist/src/entities/*{.ts,.js}'],
        migrations: ['dist/migrations/*{.ts,.js}'],
      }),
    }),
    PetsModule,
    AuthModule,
  ],
})
export class AppModule {
  constructor(private connection: Connection) { }
}
