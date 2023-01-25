import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { HttpModule } from './http/http.module';
import { RepositoriesModule } from './repositories/repositories.module';

@Module({
  imports: [
    DatabaseModule,
    HttpModule,
    RepositoriesModule,
  ],
})
export class InfraModule { }
