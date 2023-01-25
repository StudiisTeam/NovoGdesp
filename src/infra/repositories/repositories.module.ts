import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { DepartmentRepository } from './department/department.repository';

@Module({
  imports: [DatabaseModule],
  providers: [DepartmentRepository],
  exports: [DepartmentRepository]
})
export class RepositoriesModule { }
