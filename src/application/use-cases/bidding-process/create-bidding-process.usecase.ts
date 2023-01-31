import { BiddingProcessProps, BiddingProcessRepositoryInterface } from "src/domain/interfaces/bidding-process";
import { ExcetionsServiceInterface } from "src/domain/interfaces/exception.interface";

export class CreateBiddingProcessUsecase {
  constructor(
    private biddingProcessRepository: BiddingProcessRepositoryInterface,
    private exceptionService: ExcetionsServiceInterface
  ) { }

  async handle(data: BiddingProcessProps) {
    try {
      const existBiddingProcess = await this.biddingProcessRepository.findBiddingProcessByProcess(data.processIdentifier);

      if (existBiddingProcess)
        return this.exceptionService.badRequestException({ message: 'Bidding Process alread exists', code_error: 400 })

      return await this.biddingProcessRepository.createBiddingProcess(data)
    } catch (error) {
      this.exceptionService.badRequestException({ code_error: 400, message: error })
    }
  }
}