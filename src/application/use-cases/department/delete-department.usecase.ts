import { DepartmentRepositoryInterface } from "src/domain/interfaces/deparment.interface";
import { ExcetionsServiceInterface } from "src/domain/interfaces/exception.interface";

export class DeleteDepartmentUseCase {
  constructor(
    private departmentRepository: DepartmentRepositoryInterface,
    private exceptionService: ExcetionsServiceInterface
  ) { }
  async handle(id: string) {
    const department = await this.departmentRepository.findDepartmentById(id)
    if (!department) {
      return this.exceptionService.badRequestException({
        message: "Department not found",
        code_error: 404
      })
    }
    await this.departmentRepository.deleteDepartment(id)
    return "Sucess in delete department"
  }
}