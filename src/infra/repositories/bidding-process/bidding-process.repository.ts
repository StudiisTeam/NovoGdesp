import { Injectable } from '@nestjs/common';
import { BiddingProcess, BiddingProcessProps, BiddingProcessRepositoryInterface } from 'src/domain/interfaces/bidding-process';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';

@Injectable()
export class BiddingProcessRepository implements BiddingProcessRepositoryInterface {
  constructor(private prisma: PrismaService) { }

  async listBiddingProcesses(): Promise<BiddingProcess[]> {
    return await this.prisma.biddingProcess.findMany()
  }

  async findBiddingProcessById(id: string): Promise<BiddingProcess> {
    return await this.prisma.biddingProcess.findUnique({ where: { id }, include: { BiddingProcessesOnDepartments: true } })
  }

  async findBiddingProcessByProcess(processIdentifier: string): Promise<BiddingProcess> {
    return this.prisma.biddingProcess.findFirst({
      where: { processIdentifier },
      include: { BiddingProcessesOnDepartments: true }
    })
  }

  async createBiddingProcess(data: BiddingProcessProps): Promise<BiddingProcess> {
    return await this.prisma.biddingProcess.create({
      data: {
        agreement: data.agreement,
        callingInstrument: data.callingInstrument,
        executionRegime: data.executionRegime,
        guarantee: data.guarantee,
        object: data.object,
        processIdentifier: data.processIdentifier,
        processNumber: data.processNumber,
        processYear: data.processYear,
        modality: {
          connect: { id: data.modalityId }
        },
        BiddingProcessesOnDepartments: {
          create: [
            {
              departmentId: data.departmentId
            }
          ]
        }
      }
    });
  }

  async updateBiddingProcess(id: string, data: BiddingProcessProps): Promise<BiddingProcess> {
    console.log(id);

    return await this.prisma.biddingProcess.update({
      where: { id },
      data: {
        agreement: data.agreement,
        callingInstrument: data.callingInstrument,
        executionRegime: data.executionRegime,
        guarantee: data.guarantee,
        object: data.object,
        processIdentifier: data.processIdentifier,
        processNumber: data.processNumber,
        processYear: data.processYear,
        modalityId: data.modalityId,
        BiddingProcessesOnDepartments: {
          connect: {
            biddingProcessId_departmentId: {
              biddingProcessId: id,
              departmentId: data.departmentId
            }
          }
        }
      }
    })
  }

  async deleteBiddingProcess(id: string): Promise<void> {
    await this.prisma.biddingProcess.delete({ where: { id }, include: { BiddingProcessesOnDepartments: true } })
  }
}
