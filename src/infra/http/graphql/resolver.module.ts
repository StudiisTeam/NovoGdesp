import { Module } from '@nestjs/common';
import { DepartmentModule } from './deparment/department.module';

@Module({
  imports: [
    DepartmentModule,
  ],
})

export class ResolverModule { }
