import { Injectable } from '@nestjs/common';
import { 
  PriceRegistrationProtocol, 
  CreatePriceRegistrationProtocolProps,
  UpdatePriceRegistrationProtocolProps, 
  PriceRegistrationProtocolRepositoryInterface 
} from 'src/domain/interfaces/price-registration-protocol.interface';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';

@Injectable()
export class PriceRegistrationProtocolRepository implements PriceRegistrationProtocolRepositoryInterface {
  constructor(private prisma: PrismaService) { }

  async listPriceRegistrationProtocols(): Promise<PriceRegistrationProtocol[]> {
    return await this.prisma.priceRegistrationProtocol.findMany()
  }

  async findPriceRegistrationProtocolById(id: string): Promise<PriceRegistrationProtocol> {
    return await this.prisma.priceRegistrationProtocol.findUnique({
      where: { id }
    })
  }

  async findPriceRegistrationProtocolByProtocolIdentifier(protocolIdentifier: string): Promise<PriceRegistrationProtocol> {
    return this.prisma.priceRegistrationProtocol.findFirst({
      where: { protocolIdentifier }
    })
  }

  async createPriceRegistrationProtocol(data: CreatePriceRegistrationProtocolProps): Promise<PriceRegistrationProtocol> {
    return await this.prisma.priceRegistrationProtocol.create({ 
      data: data
    })
  }

  async updatePriceRegistrationProtocol(id: string, data: UpdatePriceRegistrationProtocolProps): Promise<PriceRegistrationProtocol> {
    return await this.prisma.priceRegistrationProtocol.update({
      where: { id },
      data: data
    })
  }

  async deletePriceRegistrationProtocol(id: string): Promise<void> {
    await this.prisma.priceRegistrationProtocol.delete({ where: { id } })
  }
}
