import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdatePriceRegistrationProtocolInput {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: true })
  protocolIdentifier: string
  
  @Field(() => Number, { nullable: true })
  protocolYear: number

  @Field(() => Date, { nullable: true })
  signatureDate: Date

  @Field(() => Date, { nullable: true })
  initialDate: Date

  @Field(() => Date, { nullable: true })
  endDate: Date

  @Field(() => Number, { nullable: true })
  totalAmountProtocol: number

  @Field(() => String, { nullable: true })
  contractPaymentTerm: string

  @Field(() => String, { nullable: true })
  status: string

  @Field(() => String, { nullable: true })
  biddingProcessId: string

  @Field(() => String, { nullable: true })
  hiredPhysicalPersonId: string

  @Field(() => String, { nullable: true })
  hiredLegalPersonId: string

  @Field(() => String, { nullable: true })
  departmentId: string
}