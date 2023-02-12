export interface CreateHiredPhysicalPersonProps {
  name: string;
  cpf: string;
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
  name?: string;
  cpf?: string;
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
  name: string;
  cpf?: string;
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
  abstract findHiredPhysicalPersonByCpf(cpf: string): Promise<HiredPhysicalPerson>
  abstract createHiredPhysicalPerson(data: CreateHiredPhysicalPersonProps): Promise<HiredPhysicalPerson>
  abstract updateHiredPhysicalPerson(data: UpdateHiredPhysicalPersonProps, id: string): Promise<HiredPhysicalPerson>
  abstract deleteHiredPhysicalPerson(id: string): Promise<void>
}