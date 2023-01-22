import path from 'node:path'
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { DatabaseModule } from 'src/infra/database/database.module';
import { ApolloFederationDriver } from '@nestjs/apollo';
import { TesteResolver } from './controllers/teste/teste.resolver';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      driver: ApolloFederationDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql')
    }),
  ],
  providers: [TesteResolver]
})
export class HttpModule { }
