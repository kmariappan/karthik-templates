type EnvironmentType = 'development' | 'production' | 'test' | 'staging';

declare namespace NodeJS {
  interface ProcessEnv {
    APP_ENV: EnvironmentType;
    APP_NAME: string;
    APP_PORT: string;
    BASIC_AUTH_USERNAME: string;
    BASIC_AUTH_PASSWORD: string;
  }
}
