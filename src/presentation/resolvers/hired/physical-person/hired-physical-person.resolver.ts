import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SetMetadata, UseGuards } from '@nestjs/common';
import { AuthorizationGuard } from 'src/infra/http/auth/authorization.guard';
import { PermissionsGuard } from 'src/infra/http/auth/permissions.guard';
import { HiredPhysicalPerson } from 'src/domain/models/hired-physical-person';
import {
  CreateHiredPhysicalPersonUsecase,
  DeleteHiredPhysicalPersonUseCase,
  ListHiredPhysicalPersonUsecase,
  UpdateHiredPhysicalPersonUseCase
} from 'src/application/use-cases/hired/physical-person';
import { CreateHiredPhysicalPersonInput } from 'src/infra/http/graphql/inputs/hired/physical-person/create-hired-physical-person.input';
import { UpdateHiredPhysicalPersonInput } from 'src/infra/http/graphql/inputs/hired/physical-person/update-hired-physical-person.input';


@Resolver()
export class HiredPhysicalPersonResolver {
  constructor(
    private listHiredPhysicalPersonUseCase: ListHiredPhysicalPersonUsecase,
    private createHiredPhysicalPersonUsecase: CreateHiredPhysicalPersonUsecase,
    private updateHiredPhysicalPersonUseCase: UpdateHiredPhysicalPersonUseCase,
    private deleteHiredPhysicalPersonUseCase: DeleteHiredPhysicalPersonUseCase
  ) { }

  @Mutation(() => HiredPhysicalPerson)
  // @UseGuards(AuthorizationGuard, PermissionsGuard)
  // @SetMetadata('permissions', ['create:hiredPhysicalPerson'])
  createHiredPhysicalPerson(@Args('data') data: CreateHiredPhysicalPersonInput) {
    return this.createHiredPhysicalPersonUsecase.handle(data);
  }

  @Query(() => [HiredPhysicalPerson], { name: 'hiredPhysicalPerson' })
  // @UseGuards(AuthorizationGuard, PermissionsGuard)
  // @SetMetadata('permissions', ['read:hiredPhysicalPerson'])
  listHiredPhysicalPerson() {
    return this.listHiredPhysicalPersonUseCase.handle();
  }

  @Mutation(() => HiredPhysicalPerson)
  // @UseGuards(AuthorizationGuard, PermissionsGuard)
  // @SetMetadata('permissions', ['update:hiredPhysicalPerson'])
  updateHiredPhysicalPerson(@Args('data') data: UpdateHiredPhysicalPersonInput) {
    return this.updateHiredPhysicalPersonUseCase.handle(data.id, data);
  }

  @Mutation(() => String)
  // @UseGuards(AuthorizationGuard, PermissionsGuard)
  // @SetMetadata('permissions', ['delete:hiredPhysicalPerson'])
  deleteHiredPhysicalPerson(@Args('id', { type: () => String }) id: string) {
    return this.deleteHiredPhysicalPersonUseCase.handle(id);
  }
}
