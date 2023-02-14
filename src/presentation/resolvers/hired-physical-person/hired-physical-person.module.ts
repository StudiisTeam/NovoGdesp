
import { Module } from '@nestjs/common';
import { CreateHiredPhysicalPersonUsecase, DeleteHiredPhysicalPersonUseCase, ListHiredPhysicalPersonUsecase, UpdateHiredPhysicalPersonUseCase } from 'src/application/use-cases/hired-physical-person';
import { ExcetionsServiceInterface } from 'src/domain/interfaces/exception.interface';
import { HiredPhysicalPersonRepositoryInterface } from 'src/domain/interfaces/hired-physical-person.interface';
import { HiredPhysicalPersonRepository } from 'src/infra/repositories/hired-physical-person/hired-physical-person.repository';
import { RepositoriesModule } from 'src/infra/repositories/repositories.module';
import { ExceptionsService } from 'src/presentation/helpers/exceptions.service';
import { HiredPhysicalPersonResolver } from './hired-physical-person.resolver';

@Module({
  imports: [RepositoriesModule],
  providers: [
    HiredPhysicalPersonResolver,
    ExceptionsService,
    RepositoriesModule,
    {
      provide: ListHiredPhysicalPersonUsecase,
      useFactory: (hiredPhysicalPersonRepository: HiredPhysicalPersonRepositoryInterface) => {
        return new ListHiredPhysicalPersonUsecase(hiredPhysicalPersonRepository)
      },
      inject: [HiredPhysicalPersonRepository]
    },
    {
      provide: CreateHiredPhysicalPersonUsecase,
      useFactory: (
        hiredPhysicalPersonRepository: HiredPhysicalPersonRepositoryInterface,
        exceptionServiceInterface: ExcetionsServiceInterface
      ) => {
        return new CreateHiredPhysicalPersonUsecase(hiredPhysicalPersonRepository, exceptionServiceInterface)
      },
      inject: [HiredPhysicalPersonRepository, ExceptionsService]
    },
    {
      provide: UpdateHiredPhysicalPersonUseCase,
      useFactory: (
        hiredPhysicalPersonRepository: HiredPhysicalPersonRepositoryInterface,
        exceptionService: ExcetionsServiceInterface
      ) => {
        return new UpdateHiredPhysicalPersonUseCase(hiredPhysicalPersonRepository, exceptionService)
      },
      inject: [HiredPhysicalPersonRepository, ExceptionsService]
    },
    {
      provide: DeleteHiredPhysicalPersonUseCase,
      useFactory: (
        hiredPhysicalPersonRepository: HiredPhysicalPersonRepositoryInterface,
        exceptionService: ExcetionsServiceInterface
      ) => {
        return new DeleteHiredPhysicalPersonUseCase(hiredPhysicalPersonRepository, exceptionService)
      },
      inject: [HiredPhysicalPersonRepository, ExceptionsService]
    },
  ]
})
export class HiredPhysicalPersonModule { }
