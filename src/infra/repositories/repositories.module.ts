import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { BiddingProcessRepository } from './bidding-process/bidding-process.repository';
import { DepartmentRepository } from './department/department.repository';
import { ModalityRepository } from './modality/modality.repository';

@Module({
  imports: [DatabaseModule],
  providers: [
    DepartmentRepository,
    ModalityRepository,
    BiddingProcessRepository
  ],
  exports: [
    DepartmentRepository,
    ModalityRepository,
    BiddingProcessRepository
  ]
})
export class RepositoriesModule { }
