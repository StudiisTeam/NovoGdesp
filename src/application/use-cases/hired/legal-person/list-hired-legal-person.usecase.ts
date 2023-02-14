import { HiredLegalPersonRepositoryInterface } from "src/domain/interfaces/hired-legal-person.interface";

export class ListHiredLegalPersonUsecase {
  constructor(private hiredLegalPersonRepository: HiredLegalPersonRepositoryInterface) { }
  async handle() {
    return await this.hiredLegalPersonRepository.listHiredLegalPerson()
  }
}