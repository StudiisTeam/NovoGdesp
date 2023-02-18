export interface UpdatePriceRegistrationProtocolProps {
  protocolIdentifier: string
  protocolYear: number
  signatureDate: Date
  initialDate: Date
  endDate: Date
  totalAmountProtocol: number
  contractPaymentTerm: string
  status: string
  biddingProcessId: string
  hiredPhysicalPersonId?: string
  hiredLegalPersonId?: string
  departmentId: string
}

export interface CreatePriceRegistrationProtocolProps {
  protocolIdentifier: string
  protocolYear: number
  signatureDate: Date
  initialDate: Date
  endDate: Date
  totalAmountProtocol: number
  contractPaymentTerm: string

  biddingProcessId: string
  hiredPhysicalPersonId?: string
  hiredLegalPersonId?: string
  departmentId: string
  deletedAt?: Date
}

export type PriceRegistrationProtocol = {
  protocolIdentifier?: string
  protocolYear?: number
  signatureDate: Date
  initialDate: Date
  endDate: Date
  totalAmountProtocol: number
  contractPaymentTerm: string

  biddingProcessId: string
  hiredPhysicalPersonId?: string
  hiredLegalPersonId?: string
  departmentId: string
  deletedAt?: Date
}

export abstract class PriceRegistrationProtocolRepositoryInterface {
  abstract listPriceRegistrationProtocols(): Promise<PriceRegistrationProtocol[]>
  abstract findPriceRegistrationProtocolById(id: string): Promise<PriceRegistrationProtocol>
  abstract findPriceRegistrationProtocolByProtocolIdentifier(protocolIdentifier: string): Promise<PriceRegistrationProtocol>
  abstract createPriceRegistrationProtocol(data: CreatePriceRegistrationProtocolProps): Promise<PriceRegistrationProtocol>
  abstract updatePriceRegistrationProtocol(id: string, data: UpdatePriceRegistrationProtocolProps): Promise<PriceRegistrationProtocol>
  abstract deletePriceRegistrationProtocol(id: string): Promise<void>
}