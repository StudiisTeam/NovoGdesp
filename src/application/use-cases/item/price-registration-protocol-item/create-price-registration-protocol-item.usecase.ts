import { PriceRegistrationProtocolItemProps, PriceRegistrationProtocolItemRepositoryInterface } from "src/domain/interfaces/items/price-registration-protocol-item.interface";

export class CreatePriceRegistrationProtocolItemUseCase {
  constructor(
    private priceRegistrationProtocolItemRepository: PriceRegistrationProtocolItemRepositoryInterface
  ) { }

  async handle(data: PriceRegistrationProtocolItemProps) {
    return await this.priceRegistrationProtocolItemRepository.createPriceRegistrationProtocolItem(data)
  }
}