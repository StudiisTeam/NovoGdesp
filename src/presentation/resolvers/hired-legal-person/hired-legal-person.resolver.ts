import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HiredLegalPerson } from 'src/domain/models/hired-legal-person';
import { CreateHiredLegalPersonInput } from 'src/infra/http/graphql/inputs/hired-legal-person/create-hired-legal-Person.input';
import { UpdateHiredLegalPersonInput } from 'src/infra/http/graphql/inputs/hired-legal-person/update-hired-legal-Person.input';

@Resolver()
export class HiredLegalPersonResolver {
  constructor(private readonly hiredService: HiredService) { }

  @Mutation(() => HiredLegalPerson)
  createHired(@Args('createHiredInput') createHiredInput: CreateHiredLegalPersonInput) {
    return this.hiredService.create(createHiredInput);
  }

  @Query(() => [HiredLegalPerson], { name: 'hired' })
  findAll() {
    return this.hiredService.findAll();
  }

  @Query(() => HiredLegalPerson, { name: 'hired' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.hiredService.findOne(id);
  }

  @Mutation(() => HiredLegalPerson)
  updateHired(@Args('updateHiredInput') updateHiredInput: UpdateHiredLegalPersonInput) {
    return this.hiredService.update(updateHiredInput.id, updateHiredInput);
  }

  @Mutation(() => HiredLegalPerson)
  removeHired(@Args('id', { type: () => Int }) id: number) {
    return this.hiredService.remove(id);
  }
}
