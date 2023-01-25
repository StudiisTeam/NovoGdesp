import { Module } from '@nestjs/common';
import { InfraModule } from './infra/infra.module';
import { DomainModule } from './domain/domain.module';

@Module({
  imports: [InfraModule, DomainModule, DomainModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
