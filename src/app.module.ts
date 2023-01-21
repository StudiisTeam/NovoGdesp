import { Module } from '@nestjs/common';
import { DomainModule } from './domain/domain.module';
import { PresentationModule } from './presentation/presentation.module';
import { InfraModule } from './infra/infra.module';

@Module({
  imports: [
    DomainModule,
    PresentationModule,
    InfraModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
