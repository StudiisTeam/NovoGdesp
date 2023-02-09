import { HiredLegalPersonRepositoryInterface } from "src/domain/interfaces/hiredLegalPerson";

export class ListHiredLegalPersonUsecase {
  constructor(private hiredLegalPersonRepository: HiredLegalPersonRepositoryInterface) { }
  async handle() {
    return await this.hiredLegalPersonRepository.listHiredLegalPerson()
  }
}