import { ExcetionsServiceInterface } from "src/domain/interfaces/exception.interface";
import { PriceRegistrationProtocolItemRepositoryInterface, UpdatePriceRegistrationProtocolItemProps } from "src/domain/interfaces/items/price-registration-protocol-item.interface";

export class UpdatePriceRegistrationProtocolItemUseCase {
  constructor(
    private priceRegistrationProtocolItemRepository: PriceRegistrationProtocolItemRepositoryInterface,
    private exceptionService: ExcetionsServiceInterface
  ) { }

  async handle(id: string, data: UpdatePriceRegistrationProtocolItemProps) {
    const priceRegistrationProtocolItem = await this.priceRegistrationProtocolItemRepository.findPriceRegistrationProtocolItemById(id)
    if (!priceRegistrationProtocolItem) {
      return this.exceptionService.badRequestException({ message: "Price Registration Protocol Item not found", code_error: 404 })
    }
    return await this.priceRegistrationProtocolItemRepository.updatePriceRegistrationProtocolItem(data.id, data)
  }
}