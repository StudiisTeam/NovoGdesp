import { Module } from '@nestjs/common';
import { ExcetionsServiceInterface } from 'src/domain/interfaces/exception.interface';
import { ModalityRepositoryInterface } from 'src/domain/interfaces/modality.inteface';
import { CreateModalityUseCase } from 'src/application/use-cases/modality/create-modality.usecase';
import { DeleteModalityUseCase } from 'src/application/use-cases/modality/delete-modality.usecase';
import { ListModalityUsecase } from 'src/application/use-cases/modality/list-modality.usecase';
import { UpdateModalityUseCase } from 'src/application/use-cases/modality/update-modality.usecase';
import { ExceptionsService } from 'src/presentation/helpers/exceptions.service';
import { ModalityRepository } from 'src/infra/repositories/modality/modality.repository';
import { RepositoriesModule } from 'src/infra/repositories/repositories.module';
import { ModalityResolver } from './modality.resolver';

@Module({
  imports: [RepositoriesModule],
  providers: [
    ExceptionsService,
    ModalityResolver,
    RepositoriesModule,
    {
      provide: ListModalityUsecase,
      useFactory: (modalityRepository: ModalityRepositoryInterface) => {
        return new ListModalityUsecase(modalityRepository)
      },
      inject: [ModalityRepository]
    },
    {
      provide: CreateModalityUseCase,
      useFactory: (
        modalityRepository: ModalityRepositoryInterface,
        exceptionServiceInterface: ExcetionsServiceInterface
      ) => {
        return new CreateModalityUseCase(modalityRepository, exceptionServiceInterface)
      },
      inject: [ModalityRepository, ExceptionsService]
    },
    {
      provide: UpdateModalityUseCase,
      useFactory: (
        modalityRepository: ModalityRepositoryInterface,
        exceptionService: ExcetionsServiceInterface
      ) => {
        return new UpdateModalityUseCase(modalityRepository, exceptionService)
      },
      inject: [ModalityRepository, ExceptionsService]
    },
    {
      provide: DeleteModalityUseCase,
      useFactory: (
        modalityRepository: ModalityRepositoryInterface,
        exceptionService: ExcetionsServiceInterface
      ) => {
        return new DeleteModalityUseCase(modalityRepository, exceptionService)
      },
      inject: [ModalityRepository, ExceptionsService]
    },
  ]
})
export class ModalityModule { }
