import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateDepartmentUsecase } from 'src/domain/use-cases/department/create-department.usecase';
import { ListDepartmentUsecase } from 'src/domain/use-cases/department/list-departments.usecase';
import { AuthorizationGuard } from '../../../auth/authorization.guard';
import { CreateDepartmentInput } from '../../inputs/create-department-input';
import { Department } from '../../models/department';

@Resolver()
export class DepartmentResolver {
  constructor(
    private listDepartmentUseCase: ListDepartmentUsecase,
    private createDepartmentUseCase: CreateDepartmentUsecase
  ) { }

  @Query(() => [Department])
  @UseGuards(AuthorizationGuard)
  departments() {
    return this.listDepartmentUseCase.handle();
  }

  @Mutation(() => Department)
  @UseGuards(AuthorizationGuard)
  createDepartment(
    @Args('data') data: CreateDepartmentInput
  ) {
    return this.createDepartmentUseCase.handle(data)
  }
}
