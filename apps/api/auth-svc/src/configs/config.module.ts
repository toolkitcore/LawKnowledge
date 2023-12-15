import Joi from 'joi';
import { Module } from '@nestjs/common';
import { authConfigSchema, configs } from './auth.config';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      load: [configs],
      validationSchema: Joi.object({
        ...authConfigSchema,
      }),
      cache: true,
      isGlobal: true,
      expandVariables: true,
      validationOptions: {
        abortEarly: true,
        cache: !process.env.NODE_ENV.startsWith('prod'),
        debug: !process.env.NODE_ENV.startsWith('prod'),
        stack: !process.env.NODE_ENV.startsWith('prod'),
      },
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class NestConfigModule {}
