import { ExcetionsServiceInterface } from "src/domain/interfaces/exception.interface";
import { HiredPhysicalPersonRepositoryInterface } from "src/domain/interfaces/hired-physical-person.interface";

export class DeleteHiredPhysicalPersonUseCase {
  constructor(
    private hiredPhysicalPersonRepository: HiredPhysicalPersonRepositoryInterface,
    private exceptionService: ExcetionsServiceInterface
  ) { }
  async handle(id: string) {
    try {
      const hiredPhysicalPerson = await this.hiredPhysicalPersonRepository.findHiredPhysicalPersonById(id)
      if (!hiredPhysicalPerson) {
        return this.exceptionService.badRequestException({
          message: "hired Physical Person not found",
          code_error: 404
        })
      }

      await this.hiredPhysicalPersonRepository.deleteHiredPhysicalPerson(id)
      return "Sucess in delete hired Physical Person"
    } catch (error) {
      this.exceptionService.badRequestException({
        message: error,
        code_error: 404
      })
    }
  }
}