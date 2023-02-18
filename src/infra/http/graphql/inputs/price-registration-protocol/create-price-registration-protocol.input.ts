import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreatePriceRegistrationProtocol {
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

  @Field(() => String)
  biddingProcessId: string

  @Field(() => String, { nullable: true })
  hiredPhysicalPersonId: string

  @Field(() => String, { nullable: true })
  hiredLegalPersonId: string

  @Field(() => String)
  departmentId: string
}