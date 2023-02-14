import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBiddingProcessInput {
  @Field(() => String)
  processIdentifier: string

  @Field(() => String)
  processNumber: string

  @Field(() => Int)
  processYear: number

  @Field(() => Int)
  modalityId: number

  @Field(() => String)
  departmentId: string

  @Field(() => String)
  callingInstrument: string

  @Field(() => String)
  object: string

  @Field(() => String)
  executionRegime: string

  @Field(() => Boolean)
  guarantee: boolean

  @Field(() => Boolean)
  agreement: boolean
}
