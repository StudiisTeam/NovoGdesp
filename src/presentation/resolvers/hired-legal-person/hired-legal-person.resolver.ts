import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HiredLegalPerson } from 'src/domain/models/hired-legal-person';
import { DeleteHiredLegalPersonUseCase } from 'src/application/use-cases/hired-legal-person/delete-hired-legal-person.usecase';
import { ListHiredLegalPersonUsecase } from 'src/application/use-cases/hired-legal-person/list-hired-legal-person.usecase';
import { UpdateHiredLegalPersonUseCase } from 'src/application/use-cases/hired-legal-person/update-hired-legal-person.usecase';
import { CreateHiredLegalPersonInput } from 'src/infra/http/graphql/inputs/hired-legal-person/create-hired-legal-Person.input';
import { UpdateHiredLegalPersonInput } from 'src/infra/http/graphql/inputs/hired-legal-person/update-hired-legal-Person.input';
import { CreateHiredLegalPersonUsecase } from 'src/application/use-cases/hired-legal-person/create-hired-legal-person.usecase';

@Resolver()
export class HiredLegalPersonResolver {
  constructor(
    private listHiredLegalPersonUseCase: ListHiredLegalPersonUsecase,
    private createHiredLegalPersonUsecase: CreateHiredLegalPersonUsecase,
    private updateHiredLegalPersonUseCase: UpdateHiredLegalPersonUseCase,
    private deleteHiredLegalPersonUseCase: DeleteHiredLegalPersonUseCase
  ) { }

  @Mutation(() => HiredLegalPerson)
  createHiredLegalPerson(@Args('data') data: CreateHiredLegalPersonInput) {
    return this.createHiredLegalPersonUsecase.handle(data);
  }

  @Query(() => [HiredLegalPerson], { name: 'hiredLegalPerson' })
  findAllHiredLegalPerson() {
    return this.listHiredLegalPersonUseCase.handle();
  }

  @Mutation(() => HiredLegalPerson)
  updateHiredLegalPerson(@Args('data') data: UpdateHiredLegalPersonInput) {
    return this.updateHiredLegalPersonUseCase.handle(data.id, data);
  }

  @Mutation(() => HiredLegalPerson)
  removeHiredLegalPerson(@Args('id', { type: () => String }) id: string) {
    return this.deleteHiredLegalPersonUseCase.handle(id);
  }
}
