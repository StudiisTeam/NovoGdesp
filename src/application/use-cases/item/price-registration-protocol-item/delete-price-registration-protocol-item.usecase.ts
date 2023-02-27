import { ExcetionsServiceInterface } from "src/domain/interfaces/exception.interface";
import { PriceRegistrationProtocolItemRepositoryInterface } from "src/domain/interfaces/items/price-registration-protocol-item.interface";

export class DeletePriceRegistrationProtocolItemUseCase {
  constructor(
    private priceRegistrationProtocolItemRepository: PriceRegistrationProtocolItemRepositoryInterface,
    private exceptionService: ExcetionsServiceInterface
  ) { }

  async handle(id: string) {
    const item = await this.priceRegistrationProtocolItemRepository.findPriceRegistrationProtocolItemById(id)
    if (!item) {
      return this.exceptionService.badRequestException({
        message: "item not found",
        code_error: 404
      })
    }
    await this.priceRegistrationProtocolItemRepository.deletePriceRegistrationProtocolItem(id)
    return "Sucess in delete item"
  }
}