import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthBasicModule } from './core/auth-basic/auth-basic.module';
import { AppConfigModule } from './core/config/app-config.module';

@Module({
  imports: [AppConfigModule, AuthBasicModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
