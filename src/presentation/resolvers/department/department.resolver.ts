import { SetMetadata, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateDepartmentUsecase } from 'src/application/use-cases/department/create-department.usecase';
import { DeleteDepartmentUseCase } from 'src/application/use-cases/department/delete-department.usecase';
import { ListDepartmentUsecase } from 'src/application/use-cases/department/list-departments.usecase';
import { UpdateDepartmentUseCase } from 'src/application/use-cases/department/update-department.usecase';
import { AuthorizationGuard } from '../../../infra/http/auth/authorization.guard';
import { CreateDepartmentInput } from '../../../infra/http/graphql/inputs/deparment/create-department-input';
import { UpdateDepartmentInput } from '../../../infra/http/graphql/inputs/deparment/update-department-input';

import { Department } from '../../../domain/models/department';
import { PermissionsGuard } from 'src/infra/http/auth/permissions.guard';

@Resolver()
export class DepartmentResolver {
  constructor(
    private listDepartmentUseCase: ListDepartmentUsecase,
    private createDepartmentUseCase: CreateDepartmentUsecase,
    private updateDepartmentUseCase: UpdateDepartmentUseCase,
    private deleteDepartmentUseCase: DeleteDepartmentUseCase
  ) { }

  @Query(() => [Department])
  @UseGuards(AuthorizationGuard, PermissionsGuard)
  @SetMetadata('permissions', ['read:departments'])
  async departments() {
    return this.listDepartmentUseCase.handle();
  }

  @Mutation(() => Department)
  @UseGuards(AuthorizationGuard, PermissionsGuard)
  @SetMetadata('permissions', ['create:departments'])
  async createDepartment(
    @Args('data') data: CreateDepartmentInput
  ) {
    return await this.createDepartmentUseCase.handle(data)
  }

  @Mutation(() => Department)
  @UseGuards(AuthorizationGuard, PermissionsGuard)
  @SetMetadata('permissions', ['update:departments'])
  async updateDepartment(
    @Args('data') data: UpdateDepartmentInput
  ) {
    return await this.updateDepartmentUseCase.handle(data)
  }

  @Mutation(() => String)
  @UseGuards(AuthorizationGuard, PermissionsGuard)
  @SetMetadata('permissions', ['delete:departments'])
  async deleteDepartment(
    @Args('id') id: string
  ) {
    return await this.deleteDepartmentUseCase.handle(id)
  }
}
