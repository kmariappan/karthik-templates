import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthBasicGuard } from './core/auth-basic/auth-basic.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(AuthBasicGuard)
  @Get('secure')
  portectedPath(): string {
    return 'You have reached the Secure Endpoint.'
  }
}
