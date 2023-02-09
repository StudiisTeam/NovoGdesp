import { ExcetionsServiceInterface } from "src/domain/interfaces/exception.interface";
import { HiredLegalPersonProps, HiredLegalPersonRepositoryInterface } from "src/domain/interfaces/hiredLegalPerson";

export class UpdateHiredLegalPersonUseCase {
  constructor(
    private hiredLegalPersonRepository: HiredLegalPersonRepositoryInterface,
    private exceptionService: ExcetionsServiceInterface
  ) { }

  async handle(id: string, data: HiredLegalPersonProps) {
    try {
      const HiredLegalPerson = await this.hiredLegalPersonRepository.findHiredLegalPersonById(id)
      if (!HiredLegalPerson) {
        return this.exceptionService.badRequestException({ message: "Bidding Process not found", code_error: 404 })
      }
      return await this.hiredLegalPersonRepository.updateHiredLegalPerson(data, id)
    } catch (error) {
      this.exceptionService.badRequestException({
        message: error,
        code_error: 400
      })
    }
  }
}