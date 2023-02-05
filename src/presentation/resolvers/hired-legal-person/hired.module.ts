
import { Module } from '@nestjs/common';
import { RepositoriesModule } from 'src/infra/repositories/repositories.module';
import { ExceptionsService } from 'src/presentation/helpers/exceptions.service';
import { HiredLegalPersonResolver } from './hired-legal-person.resolver';

@Module({
  imports: [RepositoriesModule],
  providers: [
    HiredLegalPersonResolver,
    ExceptionsService,
    RepositoriesModule
  ]
})
export class HiredModule { }
