import { Module } from '@nestjs/common';
import { DepartmentRepositoryInterface } from 'src/domain/interfaces/deparment.interface';
import { ExcetionsServiceInterface } from 'src/domain/interfaces/exception.interface';
import { ExceptionsService } from 'src/presentation/helpers/exceptions.service';
import { DepartmentRepository } from 'src/infra/repositories/department/department.repository';
import { RepositoriesModule } from 'src/infra/repositories/repositories.module';
import { DepartmentResolver } from './department.resolver';
import { CreateDepartmentUsecase, DeleteDepartmentUseCase, ListDepartmentUsecase, UpdateDepartmentUseCase } from 'src/application/use-cases/department';

@Module({
  imports: [
    RepositoriesModule,
  ],
  providers: [
    ExceptionsService,
    DepartmentResolver,
    {
      provide: ListDepartmentUsecase,
      useFactory: (departmentService: DepartmentRepositoryInterface) => {
        return new ListDepartmentUsecase(departmentService)
      },
      inject: [DepartmentRepository]
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
        exceptionService: ExcetionsServiceInterface
      ) => {
        return new UpdateDepartmentUseCase(departmentService, exceptionService)
      },
      inject: [DepartmentRepository, ExceptionsService]
    },
    {
      provide: DeleteDepartmentUseCase,
      useFactory: (
        departmentService: DepartmentRepositoryInterface,
        exceptionService: ExcetionsServiceInterface
      ) => {
        return new DeleteDepartmentUseCase(departmentService, exceptionService)
      },
      inject: [DepartmentRepository, ExceptionsService]
    },
  ],
})
export class DepartmentModule { }
