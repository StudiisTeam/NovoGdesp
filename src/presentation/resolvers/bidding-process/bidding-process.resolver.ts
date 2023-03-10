import { SetMetadata, UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BiddingProcess } from 'src/domain/models/bidding-process';
import { AuthorizationGuard } from 'src/infra/http/auth/authorization.guard';
import { PermissionsGuard } from 'src/infra/http/auth/permissions.guard';
import { CreateBiddingProcessInput } from 'src/infra/http/graphql/inputs/bidding-process/create-bidding-process.input';
import { UpdateBiddingProcessInput } from 'src/infra/http/graphql/inputs/bidding-process/update-bidding-process.input';
import {
  ListBiddingProcessUsecase,
  CreateBiddingProcessUsecase,
  DeleteBiddingProcessUseCase,
  UpdateBiddingProcessUseCase
} from 'src/application/use-cases/bidding-process/index';


@Resolver()
export class BiddingProcessResolver {
  constructor(
    private listBiddingProcessUseCase: ListBiddingProcessUsecase,
    private createBiddingProcessUseCase: CreateBiddingProcessUsecase,
    private updateBiddingProcessUseCase: UpdateBiddingProcessUseCase,
    private deleteBiddingProcessUseCase: DeleteBiddingProcessUseCase
  ) { }

  @Mutation(() => BiddingProcess)
  @UseGuards(AuthorizationGuard, PermissionsGuard)
  @SetMetadata('permissions', ['create:biddingProcess'])
  async createBiddingProcess(
    @Args('data') data: CreateBiddingProcessInput
  ) {
    return await this.createBiddingProcessUseCase.handle(data);
  }

  @Query(() => [BiddingProcess], { name: 'biddingProcess' })
  @UseGuards(AuthorizationGuard, PermissionsGuard)
  @SetMetadata('permissions', ['read:biddingProcess'])
  async listBiddingProcesses() {
    return await this.listBiddingProcessUseCase.handle();
  }

  @Mutation(() => BiddingProcess)
  @UseGuards(AuthorizationGuard, PermissionsGuard)
  @SetMetadata('permissions', ['update:biddingProcess'])
  async updateBiddingProcess(
    @Args('data') data: UpdateBiddingProcessInput,
  ) {
    return await this.updateBiddingProcessUseCase.handle(data.id, data);
  }

  @Mutation(() => String)
  @UseGuards(AuthorizationGuard, PermissionsGuard)
  @SetMetadata('permissions', ['delete:biddingProcess'])
  async deleteBiddingProcess(@Args('id', { type: () => String }) id: string) {
    return await this.deleteBiddingProcessUseCase.handle(id);
  }
}
