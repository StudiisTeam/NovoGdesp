import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Hired } from './entities/hired.entity';
import { CreateHiredInput } from './dto/create-hired.input';
import { UpdateHiredInput } from './dto/update-hired.input';

@Resolver(() => Hired)
export class HiredLegalPersonResolver {
  constructor(private readonly hiredService: HiredService) { }

  @Mutation(() => Hired)
  createHired(@Args('createHiredInput') createHiredInput: CreateHiredInput) {
    return this.hiredService.create(createHiredInput);
  }

  @Query(() => [Hired], { name: 'hired' })
  findAll() {
    return this.hiredService.findAll();
  }

  @Query(() => Hired, { name: 'hired' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.hiredService.findOne(id);
  }

  @Mutation(() => Hired)
  updateHired(@Args('updateHiredInput') updateHiredInput: UpdateHiredInput) {
    return this.hiredService.update(updateHiredInput.id, updateHiredInput);
  }

  @Mutation(() => Hired)
  removeHired(@Args('id', { type: () => Int }) id: number) {
    return this.hiredService.remove(id);
  }
}
