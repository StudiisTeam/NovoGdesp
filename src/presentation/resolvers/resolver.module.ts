import { Module } from '@nestjs/common';
import { BiddingProcessModule } from './bidding-process/bidding-process.module';
import { DepartmentModule } from './department/department.module';
import { ModalityModule } from './modality/modality.module';

@Module({
  imports: [
    DepartmentModule,
    ModalityModule,
    BiddingProcessModule
  ],
})

export class ResolverModule { }
