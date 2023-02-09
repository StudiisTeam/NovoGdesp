import { Injectable } from '@nestjs/common';
import { HiredLegalPerson, HiredLegalPersonProps, HiredLegalPersonRepositoryInterface } from 'src/domain/interfaces/hiredLegalPerson';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';

@Injectable()
export class HiredLegalPersonRepository implements HiredLegalPersonRepositoryInterface {
  constructor(private prisma: PrismaService) { }

  async listHiredLegalPerson(): Promise<HiredLegalPerson[]> {
    return await this.prisma.hiredLegalPerson.findMany()
  }

  async findHiredLegalPersonById(id: string): Promise<HiredLegalPerson> {
    return await this.prisma.hiredLegalPerson.findUnique({ where: { id } })
  }

  async findHiredLegalPersonByCnpj(cnpj: string): Promise<HiredLegalPerson> {
    return await this.prisma.hiredLegalPerson.findUnique({ where: { cnpj } })
  }

  async createHiredLegalPerson(data: HiredLegalPersonProps): Promise<HiredLegalPerson> {
    return await this.prisma.hiredLegalPerson.create({ data: data })
  }

  async updateHiredLegalPerson(data: HiredLegalPersonProps, id: string): Promise<HiredLegalPerson> {
    return await this.prisma.hiredLegalPerson.update({ where: { id }, data: data })
  }

  async deleteHiredLegalPerson(id: string): Promise<void> {
    await this.prisma.hiredLegalPerson.delete({ where: { id } })
  }
}
