import { Injectable } from '@nestjs/common';
import { HiredPhysicalPerson, CreateHiredPhysicalPersonProps, UpdateHiredPhysicalPersonProps, HiredPhysicalPersonRepositoryInterface } from 'src/domain/interfaces/hired-physical-person.interface';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';

@Injectable()
export class HiredPhysicalPersonRepository implements HiredPhysicalPersonRepositoryInterface {
  constructor(private prisma: PrismaService) { }

  async listHiredPhysicalPerson(): Promise<HiredPhysicalPerson[]> {
    return await this.prisma.hiredPhysicalPerson.findMany()
  }

  async findHiredPhysicalPersonById(id: string): Promise<HiredPhysicalPerson> {
    return await this.prisma.hiredPhysicalPerson.findUnique({ where: { id } })
  }

  async findHiredPhysicalPersonByCpf(cpf: string): Promise<HiredPhysicalPerson> {
    return await this.prisma.hiredPhysicalPerson.findUnique({ where: { cpf } })
  }

  async createHiredPhysicalPerson(data: CreateHiredPhysicalPersonProps): Promise<HiredPhysicalPerson> {
    return await this.prisma.hiredPhysicalPerson.create({ data: data })
  }

  async updateHiredPhysicalPerson(data: UpdateHiredPhysicalPersonProps, id: string): Promise<HiredPhysicalPerson> {
    return await this.prisma.hiredPhysicalPerson.update({ where: { id }, data: data })
  }

  async deleteHiredPhysicalPerson(id: string): Promise<void> {
    await this.prisma.hiredPhysicalPerson.delete({ where: { id } })
  }
}
