import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateDepartmentUsecase } from 'src/application/use-cases/department/create-department.usecase';
import { DeleteDepartmentUseCase } from 'src/application/use-cases/department/delete-department.usecase';
import { ListDepartmentUsecase } from 'src/application/use-cases/department/list-departments.usecase';
import { UpdateDepartmentUseCase } from 'src/application/use-cases/department/update-department.usecase';
import { AuthorizationGuard } from '../../../infra/http/auth/authorization.guard';
import { CreateDepartmentInput } from '../../../infra/http/graphql/inputs/deparment/create-department-input';
import { UpdateDepartmentInput } from '../../../infra/http/graphql/inputs/deparment/update-department-input';

import { Department } from '../../../domain/models/department';

@Resolver()
export class DepartmentResolver {
  constructor(
    private listDepartmentUseCase: ListDepartmentUsecase,
    private createDepartmentUseCase: CreateDepartmentUsecase,
    private updateDepartmentUseCase: UpdateDepartmentUseCase,
    private deleteDepartmentUseCase: DeleteDepartmentUseCase
  ) { }

  @Query(() => [Department])
  // @UseGuards(AuthorizationGuard)
  async departments() {
    return this.listDepartmentUseCase.handle();
  }

  @Mutation(() => Department)
  @UseGuards(AuthorizationGuard)
  async createDepartment(
    @Args('data') data: CreateDepartmentInput
  ) {
    return await this.createDepartmentUseCase.handle(data)
  }

  @Mutation(() => Department)
  @UseGuards(AuthorizationGuard)
  async updateDepartment(
    @Args('data') data: UpdateDepartmentInput
  ) {
    return await this.updateDepartmentUseCase.handle(data)
  }

  @Mutation(() => String)
  @UseGuards(AuthorizationGuard)
  async deleteDepartment(
    @Args('id') id: string
  ) {
    return await this.deleteDepartmentUseCase.handle(id)
  }
}
