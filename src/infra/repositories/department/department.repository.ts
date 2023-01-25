import { Injectable } from '@nestjs/common';
import { Department } from '@prisma/client';
import { CreateDepartmentProps, DepartmentServiceInterface } from 'src/domain/interfaces/deparment.interface';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';

@Injectable()
export class DepartmentRepository implements DepartmentServiceInterface {
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

  async createDepartment({ title, accountable, acronym, color }: CreateDepartmentProps): Promise<Department> {
    return await this.prisma.department.create({
      data: { title, accountable, acronym, color }
    })
  }
}
