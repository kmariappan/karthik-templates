import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { BasicStrategy } from 'passport-http';
import { AppConfigService } from '../config/app-config.service';

@Injectable()
export class AuthBasicStrategy extends PassportStrategy(BasicStrategy) {
  constructor(
    private readonly appConfigService: AppConfigService
  ) {
    super({
      passReqToCallback: true,
    });
  }

  public validate = async (
    req,
    username: string,
    password: string,
  ): Promise<boolean> => {
    if (
      this.appConfigService.basicAuthUsername === username &&
      this.appConfigService.basicAuthPassword === password
    ) {
      return true;
    }
    throw new UnauthorizedException();
  };
}
