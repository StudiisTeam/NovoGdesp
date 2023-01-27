import { ExcetionsServiceInterface } from "src/domain/interfaces/exception.interface";
import { ModalityProps, ModalityRepositoryInterface } from "src/domain/interfaces/modality.inteface";

export class UpdateModalityUseCase {
  constructor(
    private modalityRepository: ModalityRepositoryInterface,
    private exceptionService: ExcetionsServiceInterface
  ) { }

  async handle(data: ModalityProps) {
    const modality = await this.modalityRepository.findModalityById(data.id)
    if (!modality) {
      return this.exceptionService.badRequestException({ message: "Modality not found", code_error: 404 })
    }
    return await this.modalityRepository.updateModality(data)
  }
}