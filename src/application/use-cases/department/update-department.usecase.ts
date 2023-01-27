import { DepartmentProps, DepartmentRepositoryInterface } from "src/domain/interfaces/deparment.interface";
import { ExcetionsServiceInterface } from "src/domain/interfaces/exception.interface";

export class UpdateDepartmentUseCase {
  constructor(
    private departmentRepository: DepartmentRepositoryInterface,
    private exceptionService: ExcetionsServiceInterface
  ) { }

  async handle(data: DepartmentProps) {
    const department = await this.departmentRepository.findDepartmentById(data.id)
    if (!department) {
      return this.exceptionService.badRequestException({ message: "Department not found", code_error: 404 })
    }
    return await this.departmentRepository.updateDepartment(data)
  }
}