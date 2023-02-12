import { ExcetionsServiceInterface } from "src/domain/interfaces/exception.interface";
import { UpdateHiredPhysicalPersonProps, HiredPhysicalPersonRepositoryInterface } from "src/domain/interfaces/hired-physical-person.interface";

export class UpdateHiredPhysicalPersonUseCase {
  constructor(
    private hiredPhysicalPersonRepository: HiredPhysicalPersonRepositoryInterface,
    private exceptionService: ExcetionsServiceInterface
  ) { }

  async handle(id: string, data: UpdateHiredPhysicalPersonProps) {
    try {
      const hiredPhysicalPerson = await this.hiredPhysicalPersonRepository.findHiredPhysicalPersonById(id)
      if (!hiredPhysicalPerson) {
        return this.exceptionService.badRequestException({ message: "Hired Physical Person not found", code_error: 404 })
      }

      return await this.hiredPhysicalPersonRepository.updateHiredPhysicalPerson(data, id)
    } catch (error) {
      this.exceptionService.badRequestException({
        message: error,
        code_error: 400
      })
    }
  }
}