import { DepartmentProps, DepartmentRepositoryInterface } from "src/domain/interfaces/deparment.interface";
import { ExcetionsServiceInterface } from "src/domain/interfaces/exception.interface";

export class UpdateDepartmentUseCase {
  constructor(
    private departmentRepository: DepartmentRepositoryInterface,
    private exceptionRepository: ExcetionsServiceInterface
  ) { }

  async handle(data: DepartmentProps) {
    const deparment = await this.departmentRepository.findDepartmentById(data.id)
    if (!deparment) {
      return this.exceptionRepository.badRequestException({ message: "Department not found", code_error: 404 })
    }
    return await this.departmentRepository.updateDepartment(data)
  }
}