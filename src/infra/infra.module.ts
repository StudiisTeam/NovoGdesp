import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ExceptionsService } from '../helpers/exceptions/exceptions.service';
import { LoggerService } from '../helpers/logger/logger.service';
import { HttpModule } from './http/http.module';

@Module({
  imports: [
    DatabaseModule,
    HttpModule
  ],
})
export class InfraModule { }
