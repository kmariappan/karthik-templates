import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AppConfigModule } from '../config/app-config.module';
import { AuthBasicStrategy } from './auth-basic.strategy';

@Module({
  imports: [PassportModule, AppConfigModule],
  providers: [AuthBasicStrategy],

})
export class AuthBasicModule { }
