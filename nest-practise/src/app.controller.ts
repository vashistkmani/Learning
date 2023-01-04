import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(public readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Get('/sayHello')
  sayHello(): string {
    return this.appService.sayHello();
  }
}
