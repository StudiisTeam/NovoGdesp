import { CreatePriceRegistrationProtocolItemProps, PriceRegistrationProtocolItemProps, PriceRegistrationProtocolItemRepositoryInterface } from "src/domain/interfaces/items/price-registration-protocol-item.interface";
import { PrismaService } from "src/infra/database/prisma/prisma.service";

export class PriceRegistrationProtocolItemRepository implements PriceRegistrationProtocolItemRepositoryInterface{
  constructor(private prisma: PrismaService){}

  async listPriceRegistrationProtocolItems(): Promise<PriceRegistrationProtocolItemProps[]> {
    return await this.prisma.priceRegistrationProtocolItem.findMany()
  } 

  async findPriceRegistrationProtocolItemById(id: string): Promise<PriceRegistrationProtocolItemProps> {
    return await this.prisma.priceRegistrationProtocolItem.findUnique({where: { id }})
  }

  async createPriceRegistrationProtocolItem(data: CreatePriceRegistrationProtocolItemProps): Promise<PriceRegistrationProtocolItemProps> {
    return await this.prisma.priceRegistrationProtocolItem.create({ data })
  }

  async updatePriceRegistrationProtocolItem(id: string, data: PriceRegistrationProtocolItemProps): Promise<PriceRegistrationProtocolItemProps> {
    return await this.prisma.priceRegistrationProtocolItem.update({
      where: {id},
      data: data
    })
  }

  async deletePriceRegistrationProtocolItem(id: string): Promise<void> {
    await this.prisma.priceRegistrationProtocolItem.delete({where: {id}})
  }
}