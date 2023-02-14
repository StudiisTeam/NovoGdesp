import { ExcetionsServiceInterface } from "src/domain/interfaces/exception.interface";
import { CreateHiredLegalPersonProps, HiredLegalPersonRepositoryInterface } from "src/domain/interfaces/hired-legal-person.interface";

export class CreateHiredLegalPersonUsecase {
  constructor(
    private hiredLegalPersonRepository: HiredLegalPersonRepositoryInterface,
    private exceptionService: ExcetionsServiceInterface
  ) { }

  async handle(data: CreateHiredLegalPersonProps) {
    try {
      const existHiredLegalPerson = await this.hiredLegalPersonRepository.findHiredLegalPersonByCnpj(data.cnpj);

      if (existHiredLegalPerson)
        return this.exceptionService.badRequestException({ message: 'Hired Legal Person alread exists', code_error: 400 })

      return await this.hiredLegalPersonRepository.createHiredLegalPerson(data)
    } catch (error) {
      this.exceptionService.badRequestException({ code_error: 400, message: error })
    }
  }
}