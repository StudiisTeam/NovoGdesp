import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Modality } from '../../../domain/models/modality.entity';
import { ListModalityUsecase } from 'src/application/use-cases/modality/list-modality.usecase';
import { CreateModalityUseCase } from 'src/application/use-cases/modality/create-modality.usecase';
import { UpdateModalityUseCase } from 'src/application/use-cases/modality/update-modality.usecase';
import { DeleteModalityUseCase } from 'src/application/use-cases/modality/delete-modality.usecase';
import { CreateModalityInput } from 'src/infra/http/graphql/inputs/modality/create-modality.input';
import { UpdateModalityInput } from 'src/infra/http/graphql/inputs/modality/update-modality.input';

@Resolver(() => Modality)
export class ModalityResolver {

  constructor(
    private listModalityUseCase: ListModalityUsecase,
    private createModalityUseCase: CreateModalityUseCase,
    private updateModalityUseCase: UpdateModalityUseCase,
    private deleteModalityUseCase: DeleteModalityUseCase,
  ) { }

  @Mutation(() => Modality)
  async createModality(@Args('data') data: CreateModalityInput) {
    return await this.createModalityUseCase.handle(data);
  }

  @Query(() => [Modality], { name: 'modality' })
  listModalities() {
    return this.listModalityUseCase.handle();
  }

  @Mutation(() => Modality)
  updateModality(@Args('data') data: UpdateModalityInput) {
    return this.updateModalityUseCase.handle(data);
  }

  @Mutation(() => String)
  deleteModality(@Args('id', { type: () => Int }) id: number) {
    return this.deleteModalityUseCase.handle(id)
  }
}
