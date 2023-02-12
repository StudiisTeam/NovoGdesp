export interface CreateHiredPhysicalPersonProps {
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

export interface UpdateHiredPhysicalPersonProps {
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

export type HiredPhysicalPerson = {
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

export abstract class HiredPhysicalPersonRepositoryInterface {
  abstract listHiredPhysicalPerson(): Promise<HiredPhysicalPerson[]>
  abstract findHiredPhysicalPersonById(id: string): Promise<HiredPhysicalPerson>
  abstract findHiredPhysicalPersonByCnpj(name: string): Promise<HiredPhysicalPerson>
  abstract createHiredPhysicalPerson(data: CreateHiredPhysicalPersonProps): Promise<HiredPhysicalPerson>
  abstract updateHiredPhysicalPerson(data: UpdateHiredPhysicalPersonProps, id: string): Promise<HiredPhysicalPerson>
  abstract deleteHiredPhysicalPerson(id: string): Promise<void>
}