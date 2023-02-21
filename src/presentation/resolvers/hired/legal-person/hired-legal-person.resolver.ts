import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SetMetadata, UseGuards } from '@nestjs/common';
import { HiredLegalPerson } from 'src/domain/models/hired-legal-person';
import { UpdateHiredLegalPersonInput } from 'src/infra/http/graphql/inputs/hired/legal-person/update-hired-legal-person.input';
import { AuthorizationGuard } from 'src/infra/http/auth/authorization.guard';
import { PermissionsGuard } from 'src/infra/http/auth/permissions.guard';
import {
  CreateHiredLegalPersonUsecase,
  DeleteHiredLegalPersonUseCase,
  ListHiredLegalPersonUsecase,
  UpdateHiredLegalPersonUseCase
} from "src/application/use-cases/hired/legal-person/index"
import { CreateHiredLegalPersonInput } from 'src/infra/http/graphql/inputs/hired/legal-person/create-hired-legal-person.input';

@Resolver()
export class HiredLegalPersonResolver {
  constructor(
    private listHiredLegalPersonUseCase: ListHiredLegalPersonUsecase,
    private createHiredLegalPersonUsecase: CreateHiredLegalPersonUsecase,
    private updateHiredLegalPersonUseCase: UpdateHiredLegalPersonUseCase,
    private deleteHiredLegalPersonUseCase: DeleteHiredLegalPersonUseCase
  ) { }

  @Mutation(() => HiredLegalPerson)
  @UseGuards(AuthorizationGuard, PermissionsGuard)
  @SetMetadata('permissions', ['create:hiredLegalPerson'])
  createHiredLegalPerson(@Args('data') data: CreateHiredLegalPersonInput) {
    return this.createHiredLegalPersonUsecase.handle(data);
  }

  @Query(() => [HiredLegalPerson], { name: 'hiredLegalPerson' })
  @UseGuards(AuthorizationGuard, PermissionsGuard)
  @SetMetadata('permissions', ['read:hiredLegalPerson'])
  listHiredLegalPerson() {
    return this.listHiredLegalPersonUseCase.handle();
  }

  @Mutation(() => HiredLegalPerson)
  @UseGuards(AuthorizationGuard, PermissionsGuard)
  @SetMetadata('permissions', ['update:hiredLegalPerson'])
  updateHiredLegalPerson(@Args('data') data: UpdateHiredLegalPersonInput) {
    return this.updateHiredLegalPersonUseCase.handle(data.id, data);
  }

  @Mutation(() => String)
  @UseGuards(AuthorizationGuard, PermissionsGuard)
  @SetMetadata('permissions', ['delete:hiredLegalPerson'])
  deleteHiredLegalPerson(@Args('id', { type: () => String }) id: string) {
    return this.deleteHiredLegalPersonUseCase.handle(id);
  }
}
