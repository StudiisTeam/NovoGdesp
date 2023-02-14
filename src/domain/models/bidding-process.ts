import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class BiddingProcess {
  @Field(() => String)
  id: string;

  @Field(() => String)
  processIdentifier: string

  @Field(() => String)
  processNumber: string

  @Field(() => Int)
  processYear: number

  @Field(() => Int)
  modalityId: number

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
