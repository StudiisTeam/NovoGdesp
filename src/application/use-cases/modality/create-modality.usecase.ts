import { ExcetionsServiceInterface } from "src/domain/interfaces/exception.interface";
import { ModalityProps, ModalityRepositoryInterface } from "src/domain/interfaces/modality.inteface";

export class CreateModalityUseCase {
  constructor(
    private modalityRepostory: ModalityRepositoryInterface,
    private exceptionService: ExcetionsServiceInterface
  ) { }

  async handle({ name }: ModalityProps) {
    const modality = await this.modalityRepostory.findModalityByName(name)

    if (modality)
      return this.exceptionService.badRequestException({ message: 'Modality alread exists', code_error: 400 })

    return await this.modalityRepostory.createModality(name)
  }
}