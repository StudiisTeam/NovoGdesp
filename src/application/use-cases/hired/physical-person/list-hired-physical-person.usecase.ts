import { HiredPhysicalPersonRepositoryInterface } from "src/domain/interfaces/hired-physical-person.interface";

export class ListHiredPhysicalPersonUsecase {
  constructor(private hiredPhysicalPersonRepository: HiredPhysicalPersonRepositoryInterface) { }
  async handle() {
    return await this.hiredPhysicalPersonRepository.listHiredPhysicalPerson()
  }
}