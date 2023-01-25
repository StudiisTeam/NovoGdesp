import { DepartmentServiceInterface } from "src/domain/interfaces/deparment.interface";

export class ListDepartmentUsecase {
  constructor(private departmentService: DepartmentServiceInterface) { }
  async handle() {
    return await this.departmentService.listDepartments()
  }
}