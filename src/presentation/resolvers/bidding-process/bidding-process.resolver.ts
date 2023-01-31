import { SetMetadata, UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CreateBiddingProcessUsecase } from 'src/application/use-cases/bidding-process/create-bidding-process.usecase';
import { DeleteBiddingProcessUseCase } from 'src/application/use-cases/bidding-process/delete-bidding-process.usecase';
import { ListBiddingProcessUsecase } from 'src/application/use-cases/bidding-process/list-bidding-process.usecase';
import { UpdateBiddingProcessUseCase } from 'src/application/use-cases/bidding-process/update-bidding-process.usecase';
import { BiddingProcess } from 'src/domain/models/bidding-process';
import { AuthorizationGuard } from 'src/infra/http/auth/authorization.guard';
import { PermissionsGuard } from 'src/infra/http/auth/permissions.guard';
import { CreateBiddingProcessInput } from 'src/infra/http/graphql/inputs/bidding-process/create-bidding-process.input';
import { UpdateBiddingProcessInput } from 'src/infra/http/graphql/inputs/bidding-process/update-bidding-process.input';


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
    @Args('id') id: string
  ) {
    return await this.updateBiddingProcessUseCase.handle(id, data);
  }

  @Mutation(() => String)
  @UseGuards(AuthorizationGuard, PermissionsGuard)
  @SetMetadata('permissions', ['delete:biddingProcess'])
  async deleteBiddingProcess(@Args('id', { type: () => String }) id: string) {
    return await this.deleteBiddingProcessUseCase.handle(id);
  }
}
