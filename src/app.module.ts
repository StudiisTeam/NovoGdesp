import { Module } from '@nestjs/common';
import { ApplicationsModule } from './applications/applications.module';
import { InfraModule } from './infra/infra.module';

@Module({
  imports: [
    ApplicationsModule,
    InfraModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
