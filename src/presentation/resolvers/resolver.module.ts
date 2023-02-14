import { Module } from '@nestjs/common';
import { BiddingProcessModule } from './bidding-process/bidding-process.module';
import { DepartmentModule } from './department/department.module';
import { HiredLegalPersonModule } from './hired/legal-person/hired-legal-person.module';
import { HiredPhysicalPersonModule } from './hired/physical-person/hired-physical-person.module';
import { ModalityModule } from './modality/modality.module';

@Module({
  imports: [
    DepartmentModule,
    ModalityModule,
    BiddingProcessModule,
    HiredLegalPersonModule,
    HiredPhysicalPersonModule
  ],
})

export class ResolverModule { }
