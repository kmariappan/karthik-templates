import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppConfigService } from './app-config.service';
import * as Joi from 'joi';
import config from './app-config';
import basicAuthConfig from './basic-auth-config';


@Module({
  imports: [
    ConfigModule.forRoot({
      load: [
        config,
        basicAuthConfig
      ],
      validationSchema: Joi.object({
        APP_ENV: Joi.string().valid(
          'development',
          'production',
          'test',
          'staging',
        ),
        APP_NAME: Joi.string(),
        APP_PORT: Joi.number(),
        BASIC_AUTH_USERNAME: Joi.string(),
        BASIC_AUTH_PASSWORD: Joi.string(),
      }),
    }),
  ],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService],
})
export class AppConfigModule { }
