import { Field, ID, ObjectType, registerEnumType } from "@nestjs/graphql";
import { BiddingProcess } from "./bidding-process";
import { Department } from "./department";
import { HiredLegalPerson } from "./hired-legal-person";
import { HiredPhysicalPerson } from "./hired-physical-person";

enum PriceRegistrationProtocolStatus {
  INUSE = "INUSE",
  UNUSED = " UNUSED",
  CANCELED = "CANCELED"
}

registerEnumType(PriceRegistrationProtocolStatus,  {
  name: "PriceRegistrationProtocolStatus",
  description: "Available price registration protocolStatus statuses"
})

@ObjectType()
export class PriceRegistrationProtocol {
  @Field(()=> ID)
  id: string

  @Field(() => String)
  protocolIdentifier: string
  
  @Field(() => Number)
  protocolYear: number

  @Field(() => Date)
  signatureDate: Date

  @Field(() => Date)
  initialDate: Date

  @Field(() => Date)
  endDate: Date

  @Field(() => Number)
  totalAmountProtocol: number

  @Field(() => String)
  contractPaymentTerm: string

  @Field(() => PriceRegistrationProtocolStatus)
  status: PriceRegistrationProtocolStatus

  @Field(() => Date)
  deletedAt: Date

  @Field(() => BiddingProcess)
  biddingProcess: BiddingProcess
  biddingProcessId: string

  @Field(() => HiredPhysicalPerson)
  hiredPhyscalPerson: HiredPhysicalPerson
  hiredPhysicalPersonId: string

  @Field(() => HiredLegalPerson)
  hiredLegalPerson: HiredLegalPerson
  hiredLegalPersonId: string

  @Field(() => Department)
  deparment: Department
  departmentId: string
}