import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { DepartmentRepository } from './department/department.repository';
import { ModalityRepository } from './modality/modality.repository';

@Module({
  imports: [DatabaseModule],
  providers: [
    DepartmentRepository,
    ModalityRepository
  ],
  exports: [
    DepartmentRepository,
    ModalityRepository
  ]
})
export class RepositoriesModule { }
