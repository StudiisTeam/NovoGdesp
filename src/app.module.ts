import { Module } from '@nestjs/common';
import { LoggerModule } from './infra/logger/logger.module';
import { ExceptionsModule } from './infra/exceptions/exceptions.module';
import { HttpModule } from './presentation/http/http.module';

@Module({
  imports: [LoggerModule, ExceptionsModule, HttpModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
