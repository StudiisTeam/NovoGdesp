import { ExcetionsServiceInterface } from "src/domain/interfaces/exception.interface";
import { CreatePriceRegistrationProtocolProps, PriceRegistrationProtocolRepositoryInterface } from "src/domain/interfaces/price-registration-protocol";

export class CreatePriceRegistrationProtocolUsecase {
  constructor(
    private priceRegistrationProtocolRepository: PriceRegistrationProtocolRepositoryInterface,
    private exceptionService: ExcetionsServiceInterface
  ) { }

  async handle(data: CreatePriceRegistrationProtocolProps) {
    // try {
      const existPriceRegistrationProtocol = await this.priceRegistrationProtocolRepository.findPriceRegistrationProtocolByProtocolIdentifier(data.protocolIdentifier);

      if (existPriceRegistrationProtocol)
        return this.exceptionService.badRequestException({ message: 'price registration protocol alread exists', code_error: 400 })

      return await this.priceRegistrationProtocolRepository.createPriceRegistrationProtocol(data)
    // } catch (error) {
    //   this.exceptionService.badRequestException({ code_error: 400, message: error })
    // }
  }
}