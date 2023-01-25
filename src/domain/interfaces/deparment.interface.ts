import { Department } from "@prisma/client";


export interface DepartmentProps {
  id?: string
  title: string
  accountable: string
  acronym: string
  color: string
}

export abstract class DepartmentServiceInterface {
  abstract listDepartments(): Promise<Department[]>
  abstract findDepartmentById(id: string): Promise<Department>
  abstract findDepartmentByTitle(title: string): Promise<Department>
  abstract createDepartment(data: DepartmentProps): Promise<Department>
}