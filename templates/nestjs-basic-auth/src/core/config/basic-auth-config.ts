import { registerAs } from '@nestjs/config';
import { RegisterAsKeys } from './register-as-key';

export default registerAs(RegisterAsKeys.BASIC_AUTH, () => ({
    username: process.env.BASIC_AUTH_USERNAME,
    password: process.env.BASIC_AUTH_PASSWORD
}));
