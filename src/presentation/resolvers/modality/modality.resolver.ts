import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Modality } from '../../../domain/models/modality';
import { ListModalityUsecase } from 'src/application/use-cases/modality/list-modality.usecase';
import { CreateModalityUseCase } from 'src/application/use-cases/modality/create-modality.usecase';
import { UpdateModalityUseCase } from 'src/application/use-cases/modality/update-modality.usecase';
import { DeleteModalityUseCase } from 'src/application/use-cases/modality/delete-modality.usecase';
import { CreateModalityInput } from 'src/infra/http/graphql/inputs/modality/create-modality.input';
import { UpdateModalityInput } from 'src/infra/http/graphql/inputs/modality/update-modality.input';
import { PermissionsGuard } from 'src/infra/http/auth/permissions.guard';
import { AuthorizationGuard } from 'src/infra/http/auth/authorization.guard';
import { SetMetadata, UseGuards } from '@nestjs/common';

@Resolver(() => Modality)
export class ModalityResolver {

  constructor(
    private listModalityUseCase: ListModalityUsecase,
    private createModalityUseCase: CreateModalityUseCase,
    private updateModalityUseCase: UpdateModalityUseCase,
    private deleteModalityUseCase: DeleteModalityUseCase,
  ) { }

  @Mutation(() => Modality)
  @UseGuards(AuthorizationGuard, PermissionsGuard)
  @SetMetadata('permissions', ['create:modality'])
  async createModality(@Args('data') data: CreateModalityInput) {
    return await this.createModalityUseCase.handle(data);
  }

  @Query(() => [Modality], { name: 'modality' })
  @UseGuards(AuthorizationGuard, PermissionsGuard)
  @SetMetadata('permissions', ['read:modality'])
  listModalities() {
    return this.listModalityUseCase.handle();
  }

  @Mutation(() => Modality)
  @UseGuards(AuthorizationGuard, PermissionsGuard)
  @SetMetadata('permissions', ['update:modality'])
  updateModality(@Args('data') data: UpdateModalityInput) {
    return this.updateModalityUseCase.handle(data);
  }

  @Mutation(() => String)
  @UseGuards(AuthorizationGuard, PermissionsGuard)
  @SetMetadata('permissions', ['delete:modality'])
  deleteModality(@Args('id', { type: () => Int }) id: number) {
    return this.deleteModalityUseCase.handle(id)
  }
}
