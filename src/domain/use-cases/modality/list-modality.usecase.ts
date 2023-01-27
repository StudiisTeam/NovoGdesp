import { ModalityRepositoryInterface } from "src/domain/interfaces/modality.inteface";

export class ListModalityUsecase {
  constructor(private modalityRepository: ModalityRepositoryInterface) { }
  async handle() {
    return await this.modalityRepository.listModalities()
  }
}