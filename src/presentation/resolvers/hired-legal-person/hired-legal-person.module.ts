
import { Module } from '@nestjs/common';
import { CreateHiredLegalPersonUsecase } from 'src/application/use-cases/hired-legal-person/create-hired-legal-person.usecase';
import { DeleteHiredLegalPersonUseCase } from 'src/application/use-cases/hired-legal-person/delete-hired-legal-person.usecase';
import { ListHiredLegalPersonUsecase } from 'src/application/use-cases/hired-legal-person/list-hired-legal-person.usecase';
import { UpdateHiredLegalPersonUseCase } from 'src/application/use-cases/hired-legal-person/update-hired-legal-person.usecase';
import { ExcetionsServiceInterface } from 'src/domain/interfaces/exception.interface';
import { HiredLegalPersonRepositoryInterface } from 'src/domain/interfaces/hired-legal-person.interface';
import { HiredLegalPersonRepository } from 'src/infra/repositories/hired-legal-person/hired-legal-person.repository';
import { RepositoriesModule } from 'src/infra/repositories/repositories.module';
import { ExceptionsService } from 'src/presentation/helpers/exceptions.service';
import { HiredLegalPersonResolver } from './hired-legal-person.resolver';

@Module({
  imports: [RepositoriesModule],
  providers: [
    HiredLegalPersonResolver,
    ExceptionsService,
    RepositoriesModule,
    {
      provide: ListHiredLegalPersonUsecase,
      useFactory: (hiredLegalPersonRepository: HiredLegalPersonRepositoryInterface) => {
        return new ListHiredLegalPersonUsecase(hiredLegalPersonRepository)
      },
      inject: [HiredLegalPersonRepository]
    },
    {
      provide: CreateHiredLegalPersonUsecase,
      useFactory: (
        hiredLegalPersonRepository: HiredLegalPersonRepositoryInterface,
        exceptionServiceInterface: ExcetionsServiceInterface
      ) => {
        return new CreateHiredLegalPersonUsecase(hiredLegalPersonRepository, exceptionServiceInterface)
      },
      inject: [HiredLegalPersonRepository, ExceptionsService]
    },
    {
      provide: UpdateHiredLegalPersonUseCase,
      useFactory: (
        hiredLegalPersonRepository: HiredLegalPersonRepositoryInterface,
        exceptionService: ExcetionsServiceInterface
      ) => {
        return new UpdateHiredLegalPersonUseCase(hiredLegalPersonRepository, exceptionService)
      },
      inject: [HiredLegalPersonRepository, ExceptionsService]
    },
    {
      provide: DeleteHiredLegalPersonUseCase,
      useFactory: (
        hiredLegalPersonRepository: HiredLegalPersonRepositoryInterface,
        exceptionService: ExcetionsServiceInterface
      ) => {
        return new DeleteHiredLegalPersonUseCase(hiredLegalPersonRepository, exceptionService)
      },
      inject: [HiredLegalPersonRepository, ExceptionsService]
    },
  ]
})
export class HiredLegalPersonModule { }
