import { SetMetadata, UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CreatePriceRegistrationProtocolUsecase, DeletePriceRegistrationProtocolUseCase, ListPriceRegistrationProtocolUsecase, UpdatePriceRegistrationProtocolUseCase } from 'src/application/use-cases/price-registration-protocol';
import { PriceRegistrationProtocolItem } from 'src/domain/models/item/price-registration-protocol-item';
import { PriceRegistrationProtocol } from 'src/domain/models/price-registration-protocol';
import { AuthorizationGuard } from 'src/infra/http/auth/authorization.guard';
import { PermissionsGuard } from 'src/infra/http/auth/permissions.guard';
import { CreatePriceRegistrationProtocolInput } from 'src/infra/http/graphql/inputs/price-registration-protocol/create-price-registration-protocol.input';
import { UpdatePriceRegistrationProtocolInput } from 'src/infra/http/graphql/inputs/price-registration-protocol/update-price-registration-protocol.input';



@Resolver()
export class PriceRegistrationProtocolResolver {
  constructor(
    private listPriceRegistrationProtocolUseCase: ListPriceRegistrationProtocolUsecase,
    private createPriceRegistrationProtocolUseCase: CreatePriceRegistrationProtocolUsecase,
    private updatePriceRegistrationProtocolUseCase: UpdatePriceRegistrationProtocolUseCase,
    private deletePriceRegistrationProtocolUseCase: DeletePriceRegistrationProtocolUseCase
  ) { }

  @Mutation(() => PriceRegistrationProtocolItem)
  @UseGuards(AuthorizationGuard, PermissionsGuard)
  @SetMetadata('permissions', ['create:priceRegistrationProtocolItem'])
  async createPriceRegistrationProtocol(
    @Args('data') data: CreatePriceRegistrationProtocolInput
  ) {
    return await this.createPriceRegistrationProtocolUseCase.handle(data);
  }

  @Query(() => [PriceRegistrationProtocolItem], { name: 'priceRegistrationProtocolItem' })
  @UseGuards(AuthorizationGuard, PermissionsGuard)
  @SetMetadata('permissions', ['read:priceRegistrationProtocolItem'])
  async listPriceRegistrationProtocols() {
    return await this.listPriceRegistrationProtocolUseCase.handle();
  }

  @Mutation(() => PriceRegistrationProtocolItem)
  @UseGuards(AuthorizationGuard, PermissionsGuard)
  @SetMetadata('permissions', ['update:priceRegistrationProtocolItem'])
  async updatePriceRegistrationProtocol(
    @Args('data') data: UpdatePriceRegistrationProtocolInput,
  ) {
    return await this.updatePriceRegistrationProtocolUseCase.handle(data.id, data);
  }

  @Mutation(() => String)
  @UseGuards(AuthorizationGuard, PermissionsGuard)
  @SetMetadata('permissions', ['delete:priceRegistrationProtocolItem'])
  async deletePriceRegistrationProtocol(
    @Args('id', { type: () => String }) id: string
  ) {
    return await this.deletePriceRegistrationProtocolUseCase.handle(id);
  }
}
