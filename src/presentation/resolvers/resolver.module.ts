import { Module } from '@nestjs/common';
import { BiddingProcessModule } from './bidding-process/bidding-process.module';
import { DepartmentModule } from './department/department.module';
import { HiredLegalPersonModule } from './hired/legal-person/hired-legal-person.module';
import { HiredPhysicalPersonModule } from './hired/physical-person/hired-physical-person.module';
import { ModalityModule } from './modality/modality.module';
import { PriceRegistrationProtocolModule } from './price-registration-protocol/price-registration-protocol.module';

@Module({
  imports: [
    DepartmentModule,
    ModalityModule,
    BiddingProcessModule,
    HiredLegalPersonModule,
    HiredPhysicalPersonModule,
    PriceRegistrationProtocolModule
  ],
})

export class ResolverModule { }
