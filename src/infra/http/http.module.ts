import path from 'node:path'
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { DatabaseModule } from 'src/infra/database/database.module';
import { ApolloFederationDriver } from '@nestjs/apollo';
import { DepartmentResolver } from './graphql/resolvers/department/department.resolver';
import { CreateDepartmentUsecase } from 'src/domain/use-cases/department/create-department.usecase';
import { DepartmentRepositoryInterface } from 'src/domain/interfaces/deparment.interface';
import { ExcetionsServiceInterface } from 'src/domain/interfaces/exception.interface';
import { ExceptionsService } from 'src/infra/helpers/exceptions/exceptions.service';
import { DomainModule } from 'src/domain/domain.module';
import { ListDepartmentUsecase } from 'src/domain/use-cases/department/list-departments.usecase';
import { RepositoriesModule } from '../repositories/repositories.module';
import { DepartmentRepository } from '../repositories/department/department.repository';
import { UpdateDepartmentUseCase } from 'src/domain/use-cases/department/update-department.usecase';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      driver: ApolloFederationDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql')
    }),
    DomainModule,
    RepositoriesModule
  ],
  providers: [
    DepartmentResolver,
    {
      provide: ListDepartmentUsecase,
      useFactory: (departmentService: DepartmentRepositoryInterface) => {
        return new ListDepartmentUsecase(departmentService)
      },
      inject: [DepartmentRepository, ExceptionsService]
    },
    {
      provide: CreateDepartmentUsecase,
      useFactory: (
        departmentService: DepartmentRepositoryInterface,
        exceptionServiceInterface: ExcetionsServiceInterface
      ) => {
        return new CreateDepartmentUsecase(departmentService, exceptionServiceInterface)
      },
      inject: [DepartmentRepository, ExceptionsService]
    },
    {
      provide: UpdateDepartmentUseCase,
      useFactory: (
        departmentService: DepartmentRepositoryInterface,
        exceptionServiceInterface: ExcetionsServiceInterface
      ) => {
        return new UpdateDepartmentUseCase(departmentService, exceptionServiceInterface)
      },
      inject: [DepartmentRepository, ExceptionsService]
    },
  ]
})
export class HttpModule { }
