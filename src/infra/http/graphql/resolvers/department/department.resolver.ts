import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateDepartmentUsecase } from 'src/domain/use-cases/department/create-department.usecase';
import { DeleteDepartmentUseCase } from 'src/domain/use-cases/department/delete-department.usecase';
import { ListDepartmentUsecase } from 'src/domain/use-cases/department/list-departments.usecase';
import { UpdateDepartmentUseCase } from 'src/domain/use-cases/department/update-department.usecase';
import { AuthorizationGuard } from '../../../auth/authorization.guard';
import { CreateDepartmentInput } from '../../inputs/department/create-department-input';
import { UpdateDepartmentInput } from '../../inputs/department/update-department-input';

import { Department } from '../../models/department';

@Resolver()
export class DepartmentResolver {
  constructor(
    private listDepartmentUseCase: ListDepartmentUsecase,
    private createDepartmentUseCase: CreateDepartmentUsecase,
    private updateDepartmentUseCase: UpdateDepartmentUseCase,
    private deleteDepartmentUseCase: DeleteDepartmentUseCase
  ) { }

  @Query(() => [Department])
  @UseGuards(AuthorizationGuard)
  async departments() {
    return await this.listDepartmentUseCase.handle();
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
