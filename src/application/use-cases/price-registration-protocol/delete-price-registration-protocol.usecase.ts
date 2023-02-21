import { ExcetionsServiceInterface } from "src/domain/interfaces/exception.interface";
import { PriceRegistrationProtocolRepositoryInterface } from "src/domain/interfaces/price-registration-protocol.interface";

export class DeletePriceRegistrationProtocolUseCase {
  constructor(
    private priceRegistrationProtocolRepository: PriceRegistrationProtocolRepositoryInterface,
    private exceptionService: ExcetionsServiceInterface
  ) { }
  async handle(id: string) {
    try {
      const priceRegistrationProtocol = await this.priceRegistrationProtocolRepository.findPriceRegistrationProtocolById(id)
      if (!priceRegistrationProtocol) {
        return this.exceptionService.badRequestException({
          message: "price registration protocol not found",
          code_error: 404
        })
      }

      await this.priceRegistrationProtocolRepository.deletePriceRegistrationProtocol(id)
      return "Sucess in delete price registration protocol"
    } catch (error) {
      this.exceptionService.badRequestException({
        message: error,
        code_error: 404
      })
    }
  }
}