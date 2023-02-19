import { ExcetionsServiceInterface } from "src/domain/interfaces/exception.interface";
import { PriceRegistrationProtocolRepositoryInterface, UpdatePriceRegistrationProtocolProps } from "src/domain/interfaces/price-registration-protocol";

export class UpdatePriceRegistrationProtocolUseCase {
  constructor(
    private priceRegistrationProtocolRepository: PriceRegistrationProtocolRepositoryInterface,
    private exceptionService: ExcetionsServiceInterface
  ) { }

  async handle(id: string, data: UpdatePriceRegistrationProtocolProps) {
    try {
      const priceRegistrationProtocol = await this.priceRegistrationProtocolRepository.findPriceRegistrationProtocolById(id)
      if (!priceRegistrationProtocol) {
        return this.exceptionService.badRequestException({ 
          message: "Update priceRegistration protocol not found", 
          code_error: 404 
        })
      }
      return await this.priceRegistrationProtocolRepository.updatePriceRegistrationProtocol(id, data)
    } catch (error) {
      this.exceptionService.badRequestException({
        message: error,
        code_error: 400
      })
    }
  }
}