export interface CreateHiredLegalPersonProps {
  corporateName: string;
  cnpj: string;
  phone: string;
  email: string;
  address: string;
  nameBank: string;
  agencyBank: number;
  codeBank: number;
  accountBank: string;
  acronym: string;
  color: string;
}

export interface UpdateHiredLegalPersonProps {
  corporateName?: string;
  cnpj?: string;
  phone?: string;
  email?: string;
  address?: string;
  nameBank?: string;
  agencyBank?: number;
  codeBank?: number;
  accountBank?: string;
  acronym?: string;
  color?: string;
}

export type HiredLegalPerson = {
  id: string;
  corporateName: string;
  cnpj?: string;
  phone?: string;
  email?: string;
  address?: string;
  nameBank?: string;
  agencyBank?: number;
  codeBank?: number;
  accountBank?: string;
  acronym: string;
  color: string;
}

export abstract class HiredLegalPersonRepositoryInterface {
  abstract listHiredLegalPerson(): Promise<HiredLegalPerson[]>
  abstract findHiredLegalPersonById(id: string): Promise<HiredLegalPerson>
  abstract findHiredLegalPersonByCnpj(name: string): Promise<HiredLegalPerson>
  abstract createHiredLegalPerson(data: CreateHiredLegalPersonProps): Promise<HiredLegalPerson>
  abstract updateHiredLegalPerson(data: UpdateHiredLegalPersonProps, id: string): Promise<HiredLegalPerson>
  abstract deleteHiredLegalPerson(id: string): Promise<void>
}