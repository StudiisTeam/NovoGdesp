import { BiddingProcessRepositoryInterface } from "src/domain/interfaces/bidding-process.interface";
import { ExcetionsServiceInterface } from "src/domain/interfaces/exception.interface";

export class DeleteBiddingProcessUseCase {
  constructor(
    private biddingProcessRepository: BiddingProcessRepositoryInterface,
    private exceptionService: ExcetionsServiceInterface
  ) { }
  async handle(id: string) {
    try {
      const biddingProcess = await this.biddingProcessRepository.findBiddingProcessById(id)
      if (!biddingProcess) {
        return this.exceptionService.badRequestException({
          message: "Bidding Process not found",
          code_error: 404
        })
      }

      await this.biddingProcessRepository.deleteBiddingProcess(id)
      return "Sucess in delete Bidding Process"
    } catch (error) {
      this.exceptionService.badRequestException({
        message: error,
        code_error: 404
      })
    }
  }
}