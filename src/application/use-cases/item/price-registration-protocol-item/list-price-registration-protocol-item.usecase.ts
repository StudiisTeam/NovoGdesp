import { PriceRegistrationProtocolItemRepositoryInterface } from "src/domain/interfaces/items/price-registration-protocol-item.interface";

export class ListPriceRegistrationProtocolItemUsecase {
  constructor( private priceRegistrationProtocolItemRepository: PriceRegistrationProtocolItemRepositoryInterface) { }
  async handle() {
    return await this.priceRegistrationProtocolItemRepository.listPriceRegistrationProtocolItems()
  }
}