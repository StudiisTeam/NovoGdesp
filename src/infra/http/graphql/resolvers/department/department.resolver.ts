import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateDepartmentUsecase } from 'src/domain/use-cases/department/create-department.usecase';
import { ListDepartmentUsecase } from 'src/domain/use-cases/department/list-departments.usecase';
import { UpdateDepartmentUseCase } from 'src/domain/use-cases/department/update-department.usecase';
import { AuthorizationGuard } from '../../../auth/authorization.guard';
import { CreateDepartmentInput } from '../../inputs/create-department-input';
import { UpdateDepartmentInput } from '../../inputs/update-department-input';
import { Department } from '../../models/department';

@Resolver()
export class DepartmentResolver {
  constructor(
    private listDepartmentUseCase: ListDepartmentUsecase,
    private createDepartmentUseCase: CreateDepartmentUsecase,
    private updateDepartmentUsecase: UpdateDepartmentUseCase
  ) { }

  @Query(() => [Department])
  @UseGuards(AuthorizationGuard)
  departments() {
    return this.listDepartmentUseCase.handle();
  }

  @Mutation(() => Department)
  @UseGuards(AuthorizationGuard)
  async createDepartment(
    @Args('data') data: CreateDepartmentInput
  ) {
    return this.createDepartmentUseCase.handle(data)
  }

  @Mutation(() => Department)
  @UseGuards(AuthorizationGuard)
  async updateDepartment(
    @Args('data') data: UpdateDepartmentInput
  ) {
    return await this.updateDepartmentUsecase.handle(data)
  }
}
