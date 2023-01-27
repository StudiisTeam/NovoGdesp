import { ExcetionsServiceInterface } from "src/domain/interfaces/exception.interface";
import { ModalityRepositoryInterface } from "src/domain/interfaces/modality.inteface";

export class DeleteModalityUseCase {
  constructor(
    private modalityRepository: ModalityRepositoryInterface,
    private exceptionService: ExcetionsServiceInterface
  ) { }

  async handle(id: number) {
    const modality = await this.modalityRepository.findModalityById(id)
    if (!modality) {
      return this.exceptionService.badRequestException({
        message: "modality not found",
        code_error: 404
      })
    }
    await this.modalityRepository.deleteModality(id)
    return "Sucess in delete modality"
  }
}