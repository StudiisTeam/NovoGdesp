import { Module } from '@nestjs/common';
import { DepartmentModule } from './department/department.module';
import { ModalityModule } from './modality/modality.module';

@Module({
  imports: [
    DepartmentModule,
    ModalityModule,
  ],
})

export class ResolverModule { }
