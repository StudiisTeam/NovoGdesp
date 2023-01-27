import { Module } from '@nestjs/common';
import { InfraModule } from './infra/infra.module';
import { DomainModule } from './domain/domain.module';
import { PresentationModule } from './presentation/presentation.module';

@Module({
  imports: [
    InfraModule,
    DomainModule,
    PresentationModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
