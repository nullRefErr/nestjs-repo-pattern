import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
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
        cli: {
          migrationsDir: 'dist/migrations/*{.ts,.js}',
        },
        // entities: ['dist/entities/*{.ts,.js}'],
        autoLoadEntities: true,
        migrations: ['dist/migrations/*{.ts,.js}'],
      }),
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
    }),
    PetsModule,
    AuthModule,
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
