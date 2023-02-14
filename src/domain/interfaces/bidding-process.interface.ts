export interface BiddingProcessProps {
  processIdentifier?: string
  processNumber?: string
  processYear?: number
  callingInstrument?: string
  object?: string
  executionRegime?: string
  guarantee?: boolean
  agreement?: boolean
  departmentId?: any
  modalityId?: any
}

export type BiddingProcess = {
  processIdentifier: string
  processNumber: string
  processYear: number
  modalityId: number
  callingInstrument: string
  object: string
  executionRegime: string
  guarantee: boolean
  agreement: boolean
}

export abstract class BiddingProcessRepositoryInterface {
  abstract listBiddingProcesses(): Promise<BiddingProcess[]>
  abstract findBiddingProcessById(id: string): Promise<BiddingProcess>
  abstract findBiddingProcessByProcess(processIdentifier: string): Promise<BiddingProcess>
  abstract createBiddingProcess(data: BiddingProcessProps): Promise<BiddingProcess>
  abstract updateBiddingProcess(id: string, data: BiddingProcessProps): Promise<BiddingProcess>
  abstract deleteBiddingProcess(id: string): Promise<void>
}