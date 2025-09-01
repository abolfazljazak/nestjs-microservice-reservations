import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
@Module({
  imports: [
    NestConfigModule.forRoot({
      validationSchema: Joi.string().required(),
    }),
  ],
})
export class ConfigModule {}
