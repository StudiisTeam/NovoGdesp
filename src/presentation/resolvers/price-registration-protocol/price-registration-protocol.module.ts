import { Module } from '@nestjs/common';
import { CreatePriceRegistrationProtocolUsecase, DeletePriceRegistrationProtocolUseCase, ListPriceRegistrationProtocolUsecase, UpdatePriceRegistrationProtocolUseCase } from 'src/application/use-cases/price-registration-protocol';
import { ExcetionsServiceInterface } from 'src/domain/interfaces/exception.interface';
import { PriceRegistrationProtocolRepositoryInterface } from 'src/domain/interfaces/price-registration-protocol';
import { PriceRegistrationProtocolRepository } from 'src/infra/repositories/price-registration-protocol/price-registration-protocol.repository';
import { RepositoriesModule } from 'src/infra/repositories/repositories.module';
import { ExceptionsService } from 'src/presentation/helpers/exceptions.service';
import { PriceRegistrationProtocolResolver } from './price-registration-protocol.resolver';

@Module({
  imports: [RepositoriesModule],
  providers: [
    ExceptionsService,
    PriceRegistrationProtocolResolver,
    {
      provide: ListPriceRegistrationProtocolUsecase,
      useFactory: (priceRegistrationProtocolRepository: PriceRegistrationProtocolRepositoryInterface) => {
        return new ListPriceRegistrationProtocolUsecase(priceRegistrationProtocolRepository)
      },
      inject: [PriceRegistrationProtocolRepository]
    },
    {
      provide: CreatePriceRegistrationProtocolUsecase,
      useFactory: (
        priceRegistrationProtocolRepository: PriceRegistrationProtocolRepositoryInterface,
        exceptionServiceInterface: ExcetionsServiceInterface,
      ) => {
        return new CreatePriceRegistrationProtocolUsecase(priceRegistrationProtocolRepository, exceptionServiceInterface)
      },
      inject: [PriceRegistrationProtocolRepository, ExceptionsService]
    },
    {
      provide: UpdatePriceRegistrationProtocolUseCase,
      useFactory: (
        priceRegistrationProtocolRepository: PriceRegistrationProtocolRepositoryInterface,
        exceptionServiceInterface: ExcetionsServiceInterface,
      ) => {
        return new UpdatePriceRegistrationProtocolUseCase(priceRegistrationProtocolRepository, exceptionServiceInterface)
      },
      inject: [PriceRegistrationProtocolRepository, ExceptionsService]
    },
    {
      provide: DeletePriceRegistrationProtocolUseCase,
      useFactory: (
        priceRegistrationProtocolRepository: PriceRegistrationProtocolRepositoryInterface,
        exceptionServiceInterface: ExcetionsServiceInterface,
      ) => {
        return new DeletePriceRegistrationProtocolUseCase(priceRegistrationProtocolRepository, exceptionServiceInterface)
      },
      inject: [PriceRegistrationProtocolRepository, ExceptionsService]
    },
  ],

})
export class PriceRegistrationProtocolModule { }
