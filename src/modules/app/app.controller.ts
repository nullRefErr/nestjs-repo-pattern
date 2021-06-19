import { Controller, Get } from '@nestjs/common';
import GenericParams from 'src/lib/contract/genericParams';
import AppEntity from './app.model';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly genericParams: GenericParams<AppEntity>,
  ) {}

  @Get()
  getHello(): any {
    this.genericParams.id = 123;
    return this.appService.read(this.genericParams);
  }
}
