import { DepartmentProps, DepartmentServiceInterface } from "src/domain/interfaces/deparment.interface";
import { ExcetionsServiceInterface } from "src/domain/interfaces/exception.interface";

export class CreateDepartmentUsecase {
  constructor(
    private departmentService: DepartmentServiceInterface,
    private exceptionService: ExcetionsServiceInterface
  ) { }

  async handle({ title, accountable, acronym, color }: DepartmentProps) {
    const existDepartment = await this.departmentService.findDepartmentByTitle(title);

    if (existDepartment)
      return this.exceptionService.badRequestException({ message: 'Department alread exists', code_error: 400 })

    return await this.departmentService.createDepartment({ title, accountable, acronym, color })
  }
}