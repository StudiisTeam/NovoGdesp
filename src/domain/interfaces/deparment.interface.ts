export interface DepartmentProps {
  id?: string
  title: string
  accountable: string
  acronym: string
  color: string
}

export type Department = {
  id: string;
  title: string;
  accountable: string | null;
  acronym: string | null;
  color: string;
  createdAt: Date;
  updatedAt: Date;
}

export abstract class DepartmentRepositoryInterface {
  abstract listDepartments(): Promise<Department[]>
  abstract findDepartmentById(id: string): Promise<Department>
  abstract findDepartmentByTitle(title: string): Promise<Department>
  abstract createDepartment(data: DepartmentProps): Promise<Department>
  abstract updateDepartment(data: DepartmentProps): Promise<Department>
  abstract deleteDepartment(id: string): Promise<void>
}