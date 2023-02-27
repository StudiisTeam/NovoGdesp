import { Module } from '@nestjs/common';
import { CreatePriceRegistrationProtocolItemUseCase, DeletePriceRegistrationProtocolItemUseCase, ListPriceRegistrationProtocolItemUsecase, UpdatePriceRegistrationProtocolItemUseCase } from 'src/application/use-cases/item/price-registration-protocol-item';
import { ExcetionsServiceInterface } from 'src/domain/interfaces/exception.interface';
import { PriceRegistrationProtocolItemRepositoryInterface } from 'src/domain/interfaces/items/price-registration-protocol-item.interface';
import { PriceRegistrationProtocolItemRepository } from 'src/infra/repositories/item/price-registration-protocol-item/price-registration-protocol-item.repository';
import { RepositoriesModule } from 'src/infra/repositories/repositories.module';
import { ExceptionsService } from 'src/presentation/helpers/exceptions.service';
import { PriceRegistrationProtocolItemResolver } from './price-registration-protocol-item.resolver';

@Module({
  imports: [RepositoriesModule],
  providers: [
    ExceptionsService,
    PriceRegistrationProtocolItemResolver,
    {
      provide: ListPriceRegistrationProtocolItemUsecase,
      useFactory: (priceRegistrationProtocolItemRepository: PriceRegistrationProtocolItemRepositoryInterface) => {
        return new ListPriceRegistrationProtocolItemUsecase(priceRegistrationProtocolItemRepository)
      },
      inject: [PriceRegistrationProtocolItemRepository]
    },
    {
      provide: CreatePriceRegistrationProtocolItemUseCase,
      useFactory: (
        priceRegistrationProtocolItemRepository: PriceRegistrationProtocolItemRepositoryInterface,
      ) => {
        return new CreatePriceRegistrationProtocolItemUseCase(priceRegistrationProtocolItemRepository)
      },
      inject: [PriceRegistrationProtocolItemRepository, ExceptionsService]
    },
    {
      provide: UpdatePriceRegistrationProtocolItemUseCase,
      useFactory: (
        priceRegistrationProtocolItemRepository: PriceRegistrationProtocolItemRepositoryInterface,
        exceptionServiceInterface: ExcetionsServiceInterface,
      ) => {
        return new UpdatePriceRegistrationProtocolItemUseCase(priceRegistrationProtocolItemRepository, exceptionServiceInterface)
      },
      inject: [PriceRegistrationProtocolItemRepository, ExceptionsService]
    },
    {
      provide: DeletePriceRegistrationProtocolItemUseCase,
      useFactory: (
        priceRegistrationProtocolItemRepository: PriceRegistrationProtocolItemRepositoryInterface,
        exceptionServiceInterface: ExcetionsServiceInterface,
      ) => {
        return new DeletePriceRegistrationProtocolItemUseCase(priceRegistrationProtocolItemRepository, exceptionServiceInterface)
      },
      inject: [PriceRegistrationProtocolItemRepository, ExceptionsService]
    },
  ],

})
export class PriceRegistrationProtocolItemModule { }
