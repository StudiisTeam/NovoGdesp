import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBiddingProcessInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  processIdentifier: string

  @Field(() => String, { description: 'Example field (placeholder)' })
  processNumber: string

  @Field(() => Int, { description: 'Example field (placeholder)' })
  processYear: number

  @Field(() => Int, { description: 'Example field (placeholder)' })
  modalityId: number

  @Field(() => String, { description: 'Example field (placeholder)' })
  departmentId: string

  @Field(() => String, { description: 'Example field (placeholder)' })
  callingInstrument: string

  @Field(() => String, { description: 'Example field (placeholder)' })
  object: string

  @Field(() => String, { description: 'Example field (placeholder)' })
  executionRegime: string

  @Field(() => Boolean, { description: 'Example field (placeholder)' })
  guarantee: boolean

  @Field(() => Boolean, { description: 'Example field (placeholder)' })
  agreement: boolean
}
