import { BiddingProcessRepositoryInterface } from "src/domain/interfaces/bidding-process.interface";

export class ListBiddingProcessUsecase {
  constructor(private biddingProcessRepository: BiddingProcessRepositoryInterface) { }
  async handle() {
    return await this.biddingProcessRepository.listBiddingProcesses()
  }
}