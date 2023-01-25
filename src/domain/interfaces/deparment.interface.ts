import { Department } from "@prisma/client";


export interface CreateDepartmentProps {
  title: string
  accountable: string
  acronym: string
  color: string
}

export abstract class DepartmentServiceInterface {
  abstract listDepartments(): Promise<Department[]>
  abstract findDepartmentById(id: string): Promise<Department>
  abstract findDepartmentByTitle(title: string): Promise<Department>
  abstract createDepartment(data: CreateDepartmentProps): Promise<Department>
}