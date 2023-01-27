import { Injectable } from '@nestjs/common';
import { Modality, ModalityProps, ModalityRepositoryInterface } from 'src/domain/interfaces/modality.inteface';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';

@Injectable()
export class ModalityRepository implements ModalityRepositoryInterface {
  constructor(
    private prisma: PrismaService
  ) { }

  async listModalities(): Promise<Modality[]> {
    return await this.prisma.modality.findMany()
  }

  async findModalityById(id: number): Promise<Modality> {
    return await this.prisma.modality.findUnique({
      where: { id }
    })
  }

  async findModalityByName(name: string): Promise<Modality> {
    return await this.prisma.modality.findFirst({
      where: { name }
    })
  }
  async createModality(name: string): Promise<Modality> {
    return await this.prisma.modality.create({
      data: { name: name }
    })
  }
  async updateModality(data: ModalityProps): Promise<Modality> {
    return await this.prisma.modality.update({
      where: { id: data.id },
      data: { name: data.name }
    })
  }

  async deleteModality(id: number): Promise<void> {
    await this.prisma.modality.delete({
      where: { id }
    })
  }

}
