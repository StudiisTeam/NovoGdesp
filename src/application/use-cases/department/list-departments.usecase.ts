import { DepartmentRepositoryInterface } from "src/domain/interfaces/deparment.interface";

export class ListDepartmentUsecase {
  constructor(private departmentService: DepartmentRepositoryInterface) { }
  async handle() {
    return await this.departmentService.listDepartments()
  }
}