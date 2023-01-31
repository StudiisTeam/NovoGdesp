import { BiddingProcessProps, BiddingProcessRepositoryInterface } from "src/domain/interfaces/bidding-process";
import { ExcetionsServiceInterface } from "src/domain/interfaces/exception.interface";

export class UpdateBiddingProcessUseCase {
  constructor(
    private biddingProcessRepository: BiddingProcessRepositoryInterface,
    private exceptionService: ExcetionsServiceInterface
  ) { }

  async handle(id: string, data: BiddingProcessProps) {
    try {
      const biddingProcess = await this.biddingProcessRepository.findBiddingProcessById(id)
      if (!biddingProcess) {
        return this.exceptionService.badRequestException({ message: "Bidding Process not found", code_error: 404 })
      }
      return await this.biddingProcessRepository.updateBiddingProcess(id, data)
    } catch (error) {
      this.exceptionService.badRequestException({
        message: error,
        code_error: 400
      })
    }
  }
}