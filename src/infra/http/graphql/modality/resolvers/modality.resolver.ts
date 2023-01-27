import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Modality } from '../entities/modality.entity';
import { CreateModalityInput } from '../dto/create-modality.input';
import { UpdateModalityInput } from '../dto/update-modality.input';
import { ListModalityUsecase } from 'src/domain/use-cases/modality/list-modality.usecase';
import { CreateModalityUseCase } from 'src/domain/use-cases/modality/create-modality.usecase';
import { UpdateModalityUseCase } from 'src/domain/use-cases/modality/update-modality.usecase';
import { DeleteModalityUseCase } from 'src/domain/use-cases/modality/delete-modality.usecase';

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
