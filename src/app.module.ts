import { Module } from '@nestjs/common';
import { LoggerModule } from './infra/logger/logger.module';
import { ExceptionsModule } from './infra/exceptions/exceptions.module';
import { HttpModule } from './presentation/http/http.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [LoggerModule, ExceptionsModule, HttpModule, ConfigModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
