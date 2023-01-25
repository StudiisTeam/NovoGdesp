import { Module } from '@nestjs/common';
import { ExceptionsService } from '../infra/helpers/exceptions/exceptions.service';

@Module({
  providers: [ExceptionsService],
  exports: [ExceptionsService]
})
export class DomainModule { }
