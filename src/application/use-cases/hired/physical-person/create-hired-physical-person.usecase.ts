import { ExcetionsServiceInterface } from "src/domain/interfaces/exception.interface";
import { CreateHiredPhysicalPersonProps, HiredPhysicalPersonRepositoryInterface } from "src/domain/interfaces/hired-physical-person.interface";

export class CreateHiredPhysicalPersonUsecase {
  constructor(
    private hiredPhysicalPersonRepository: HiredPhysicalPersonRepositoryInterface,
    private exceptionService: ExcetionsServiceInterface
  ) { }

  async handle(data: CreateHiredPhysicalPersonProps) {
    try {
      const existHiredPhysicalPerson = await this.hiredPhysicalPersonRepository.findHiredPhysicalPersonByCpf(data.cpf);

      if (existHiredPhysicalPerson)
        return this.exceptionService.badRequestException({ message: 'Hired Physical Person alread exists', code_error: 400 })

      return await this.hiredPhysicalPersonRepository.createHiredPhysicalPerson(data)
    } catch (error) {
      this.exceptionService.badRequestException({ code_error: 400, message: error })
    }
  }
}