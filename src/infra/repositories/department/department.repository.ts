import { Injectable } from '@nestjs/common';
import { Department, DepartmentProps, DepartmentRepositoryInterface } from 'src/domain/interfaces/deparment.interface';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';

@Injectable()
export class DepartmentRepository implements DepartmentRepositoryInterface {
  constructor(private prisma: PrismaService) { }

  async listDepartments(): Promise<Department[]> {
    return await this.prisma.department.findMany()
  }

  async findDepartmentById(id: string): Promise<Department> {
    return await this.prisma.department.findUnique({
      where: { id }
    })
  }

  async findDepartmentByTitle(title: string): Promise<Department> {
    return this.prisma.department.findFirst({
      where: {
        title
      }
    })
  }

  async createDepartment({ title, accountable, acronym, color }: DepartmentProps): Promise<Department> {
    return await this.prisma.department.create({
      data: { title, accountable, acronym, color }
    })
  }

  async updateDepartment(data: DepartmentProps): Promise<Department> {
    return await this.prisma.department.update({
      where: {
        id: data.id
      },
      data: {
        title: data.title,
        acronym: data.acronym,
        accountable: data.accountable,
        color: data.accountable,
      }
    })
  }

  async deleteDepartment(id: string): Promise<void> {
    await this.prisma.department.delete({
      where: {
        id
      }
    })
  }
}
