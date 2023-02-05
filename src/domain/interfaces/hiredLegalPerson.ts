export interface HiredLegalPersonProps {
  name: string;
  cnpj?: number;
  phone?: number;
  email?: string;
  address?: string;
  nameBank?: string;
  agencyBank?: string;
  codeBank?: string;
  accountBank?: string;
}

export type HiredLegalPerson = {
  id: string;
  name: string;
  cnpj: number;
  cpf: number;
  rg: number;
  phone: number;
  email: string;
  address: string;
  nameBank: string;
  agencyBank: string;
  codeBank: string;
  accountBank: string;
}

export abstract class HiredLegalPersonRepositoryInterface {
  abstract listModalities(): Promise<HiredLegalPerson[]>
  abstract findHiredLegalPersonById(id: number): Promise<HiredLegalPerson>
  abstract findHiredLegalPersonByName(name: string): Promise<HiredLegalPerson>
  abstract createHiredLegalPerson(name: string): Promise<HiredLegalPerson>
  abstract updateHiredLegalPerson(data: HiredLegalPersonProps): Promise<HiredLegalPerson>
  abstract deleteHiredLegalPerson(id: number): Promise<void>
}