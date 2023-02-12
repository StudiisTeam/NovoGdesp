import { ExcetionsServiceInterface } from "src/domain/interfaces/exception.interface";
import { HiredLegalPersonRepositoryInterface } from "src/domain/interfaces/hired-legal-person.interface";

export class DeleteHiredLegalPersonUseCase {
  constructor(
    private hiredLegalPersonRepository: HiredLegalPersonRepositoryInterface,
    private exceptionService: ExcetionsServiceInterface
  ) { }
  async handle(id: string) {
    try {
      const hiredLegalPerson = await this.hiredLegalPersonRepository.findHiredLegalPersonById(id)
      if (!hiredLegalPerson) {
        return this.exceptionService.badRequestException({
          message: "Bidding Process not found",
          code_error: 404
        })
      }

      await this.hiredLegalPersonRepository.deleteHiredLegalPerson(id)
      return "Sucess in delete Bidding Process"
    } catch (error) {
      this.exceptionService.badRequestException({
        message: error,
        code_error: 404
      })
    }
  }
}