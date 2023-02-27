import { PriceRegistrationProtocolRepositoryInterface } from "src/domain/interfaces/price-registration-protocol.interface";

export class ListPriceRegistrationProtocolUsecase {
  constructor(
    private priceRegistrationProtocolRepository: PriceRegistrationProtocolRepositoryInterface
  ){}
  async handle() {
    return await this.priceRegistrationProtocolRepository.listPriceRegistrationProtocols()
  }
}