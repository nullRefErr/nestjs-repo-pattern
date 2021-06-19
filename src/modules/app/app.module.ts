import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import GenericParams from 'src/lib/contract/genericParams';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, GenericParams],
})
export class AppModule {}
