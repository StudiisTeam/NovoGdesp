export interface PriceRegistrationProtocolItemProps {
  specification: string
  observation: string
  brand: string
  unity: string
  amount: number
  value: number
  priceRegistrationProtocolId: string
}

export interface CreatePriceRegistrationProtocolItemProps {
  specification: string
  observation: string
  brand: string
  unity: string
  amount: number
  value: number
  priceRegistrationProtocolId: string
}

export interface UpdatePriceRegistrationProtocolItemProps {
  id: string
  specification: string
  observation: string
  brand: string
  unity: string
  amount: number
  value: number
  priceRegistrationProtocolId: string
}

export abstract class PriceRegistrationProtocolItemRepositoryInterface {
  abstract listPriceRegistrationProtocolItems(): Promise<PriceRegistrationProtocolItemProps[]>
  abstract findPriceRegistrationProtocolItemById(id: string): Promise<PriceRegistrationProtocolItemProps>
  abstract createPriceRegistrationProtocolItem(data: CreatePriceRegistrationProtocolItemProps): Promise<PriceRegistrationProtocolItemProps>
  abstract updatePriceRegistrationProtocolItem(id: string, data: UpdatePriceRegistrationProtocolItemProps): Promise<PriceRegistrationProtocolItemProps>
  abstract deletePriceRegistrationProtocolItem(id: string): Promise<void>
}