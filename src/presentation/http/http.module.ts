import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'src/infra/database/database.module';
import { TesteController } from './controllers/teste/teste.controller';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot()
  ],
  controllers: [TesteController]
})
export class HttpModule { }
