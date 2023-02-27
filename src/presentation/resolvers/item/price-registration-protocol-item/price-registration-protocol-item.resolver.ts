import { SetMetadata, UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CreatePriceRegistrationProtocolItemUseCase, DeletePriceRegistrationProtocolItemUseCase, ListPriceRegistrationProtocolItemUsecase, UpdatePriceRegistrationProtocolItemUseCase } from 'src/application/use-cases/item/price-registration-protocol-item';
import { PriceRegistrationProtocolItem } from 'src/domain/models/item/price-registration-protocol-item';

import { AuthorizationGuard } from 'src/infra/http/auth/authorization.guard';
import { PermissionsGuard } from 'src/infra/http/auth/permissions.guard';
import { CreatePriceRegistrationProtocolItemInput } from 'src/infra/http/graphql/inputs/item/price-registration-protocol-item/create-price-registration-protocol-item.input';
import { UpdatePriceRegistrationProtocolItemInput } from 'src/infra/http/graphql/inputs/item/price-registration-protocol-item/update-price-registration-protocol-item.input';



@Resolver()
export class PriceRegistrationProtocolItemResolver {
  constructor(
    private listPriceRegistrationProtocolItemUseCase: ListPriceRegistrationProtocolItemUsecase,
    private createPriceRegistrationProtocolItemUseCase: CreatePriceRegistrationProtocolItemUseCase,
    private updatePriceRegistrationProtocolItemUseCase: UpdatePriceRegistrationProtocolItemUseCase,
    private deletePriceRegistrationProtocolItemUseCase: DeletePriceRegistrationProtocolItemUseCase
  ) { }

  @Mutation(() => PriceRegistrationProtocolItem)
  @UseGuards(AuthorizationGuard, PermissionsGuard)
  @SetMetadata('permissions', ['create:priceRegistrationProtocolItem'])
  async createPriceRegistrationProtocolItem(
    @Args('data') data: CreatePriceRegistrationProtocolItemInput
  ) {
    return await this.createPriceRegistrationProtocolItemUseCase.handle(data);
  }

  @Query(() => [PriceRegistrationProtocolItem], { name: 'priceRegistrationProtocolItem' })
  @UseGuards(AuthorizationGuard, PermissionsGuard)
  @SetMetadata('permissions', ['read:priceRegistrationProtocolItem'])
  async listPriceRegistrationProtocolItems() {
    return await this.listPriceRegistrationProtocolItemUseCase.handle();
  }

  @Mutation(() => PriceRegistrationProtocolItem)
  @UseGuards(AuthorizationGuard, PermissionsGuard)
  @SetMetadata('permissions', ['update:priceRegistrationProtocolItem'])
  async updatePriceRegistrationProtocolItem(
    @Args('data') data: UpdatePriceRegistrationProtocolItemInput,
  ) {
    return await this.updatePriceRegistrationProtocolItemUseCase.handle(data.id, data);
  }

  @Mutation(() => String)
  @UseGuards(AuthorizationGuard, PermissionsGuard)
  @SetMetadata('permissions', ['delete:priceRegistrationProtocolItem'])
  async deletePriceRegistrationProtocolItem(
    @Args('id', { type: () => String }) id: string
  ) {
    return await this.deletePriceRegistrationProtocolItemUseCase.handle(id);
  }
}
