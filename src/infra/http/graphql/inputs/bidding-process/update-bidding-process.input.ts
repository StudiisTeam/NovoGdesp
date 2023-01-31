import { CreateBiddingProcessInput } from './create-bidding-process.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBiddingProcessInput extends PartialType(CreateBiddingProcessInput) {
  // @Field(() => String)
  // id: string;

  @Field()
  processIdentifier?: string

  @Field({ nullable: true })
  processNumber?: string

  @Field({ nullable: true })
  processYear?: number

  @Field({ nullable: true })
  modalityId?: number

  @Field({ nullable: true })
  departmentId?: string

  @Field({ nullable: true })
  callingInstrument?: string

  @Field({ nullable: true })
  object?: string

  @Field({ nullable: true })
  executionRegime?: string

  @Field({ nullable: true })
  guarantee?: boolean

  @Field({ nullable: true })
  agreement?: boolean
}
