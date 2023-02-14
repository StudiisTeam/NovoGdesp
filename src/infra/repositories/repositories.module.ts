import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { BiddingProcessRepository } from './bidding-process/bidding-process.repository';
import { DepartmentRepository } from './department/department.repository';
import { HiredLegalPersonRepository } from './hired-legal-person/hired-legal-person.repository';
import { HiredPhysicalPersonRepository } from './hired-physical-person/hired-physical-person.repository';
import { ModalityRepository } from './modality/modality.repository';

@Module({
  imports: [DatabaseModule],
  providers: [
    DepartmentRepository,
    ModalityRepository,
    BiddingProcessRepository,
    HiredLegalPersonRepository,
    HiredPhysicalPersonRepository
  ],
  exports: [
    DepartmentRepository,
    ModalityRepository,
    BiddingProcessRepository,
    HiredLegalPersonRepository,
    HiredPhysicalPersonRepository,
  ]
})
export class RepositoriesModule { }
