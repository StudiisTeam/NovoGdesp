import { Module } from '@nestjs/common';
import { CreateBiddingProcessUsecase, DeleteBiddingProcessUseCase, ListBiddingProcessUsecase, UpdateBiddingProcessUseCase } from 'src/application/use-cases/bidding-process';
import { BiddingProcessRepositoryInterface } from 'src/domain/interfaces/bidding-process.interface';
import { ExcetionsServiceInterface } from 'src/domain/interfaces/exception.interface';
import { BiddingProcessRepository } from 'src/infra/repositories/bidding-process/bidding-process.repository';
import { RepositoriesModule } from 'src/infra/repositories/repositories.module';
import { ExceptionsService } from 'src/presentation/helpers/exceptions.service';
import { BiddingProcessResolver } from './bidding-process.resolver';

@Module({
  imports: [RepositoriesModule],
  providers: [
    ExceptionsService,
    BiddingProcessResolver,
    {
      provide: ListBiddingProcessUsecase,
      useFactory: (biddingProcessRepository: BiddingProcessRepositoryInterface) => {
        return new ListBiddingProcessUsecase(biddingProcessRepository)
      },
      inject: [BiddingProcessRepository]
    },
    {
      provide: CreateBiddingProcessUsecase,
      useFactory: (
        biddingProcessRepository: BiddingProcessRepositoryInterface,
        exceptionServiceInterface: ExcetionsServiceInterface,
      ) => {
        return new CreateBiddingProcessUsecase(biddingProcessRepository, exceptionServiceInterface)
      },
      inject: [BiddingProcessRepository, ExceptionsService]
    },
    {
      provide: UpdateBiddingProcessUseCase,
      useFactory: (
        biddingProcessRepository: BiddingProcessRepositoryInterface,
        exceptionServiceInterface: ExcetionsServiceInterface,
      ) => {
        return new UpdateBiddingProcessUseCase(biddingProcessRepository, exceptionServiceInterface)
      },
      inject: [BiddingProcessRepository, ExceptionsService]
    },
    {
      provide: DeleteBiddingProcessUseCase,
      useFactory: (
        biddingProcessRepository: BiddingProcessRepositoryInterface,
        exceptionServiceInterface: ExcetionsServiceInterface,
      ) => {
        return new DeleteBiddingProcessUseCase(biddingProcessRepository, exceptionServiceInterface)
      },
      inject: [BiddingProcessRepository, ExceptionsService]
    },
  ],

})
export class BiddingProcessModule { }
