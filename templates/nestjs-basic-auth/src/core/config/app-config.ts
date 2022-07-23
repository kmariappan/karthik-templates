import { registerAs } from '@nestjs/config';
import { RegisterAsKeys } from './register-as-key';

export default registerAs(RegisterAsKeys.APPLICATION, () => ({
  env: process.env.APP_ENV,
  name: process.env.APP_NAME,
  port: process.env.APP_PORT,
}));
