import { DepartmentRepositoryInterface } from "src/domain/interfaces/deparment.interface";

export class ListDepartmentUsecase {
  constructor(private departmentRepository: DepartmentRepositoryInterface) { }
  async handle() {
    return await this.departmentRepository.listDepartments()
  }
}