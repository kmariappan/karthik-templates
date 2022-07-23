import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RegisterAsKeys } from './register-as-key';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) { }

  get applicationName(): string {
    return this.configService.get<string>(`${RegisterAsKeys.APPLICATION}.name`);
  }

  get applicationEnvironment(): string {
    return this.configService.get<string>(`${RegisterAsKeys.APPLICATION}.env`);
  }


  get applicationPort(): string {
    return this.configService.get<string>(`${RegisterAsKeys.APPLICATION}.port`);
  }


  get basicAuthUsername(): string {
    return this.configService.get<string>(`${RegisterAsKeys.BASIC_AUTH}.username`);
  }

  get basicAuthPassword(): string {
    return this.configService.get<string>(`${RegisterAsKeys.BASIC_AUTH}.password`);
  }
}
