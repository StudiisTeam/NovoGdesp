import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Modality } from './modality';

@ObjectType()
export class BiddingProcess {
  @Field(() => String, { description: 'Id field (placeholder)' })
  id: string;

  @Field(() => String, { description: 'Process Identifier field (placeholder)' })
  processIdentifier: string

  @Field(() => String, { description: 'process Number field (placeholder)' })
  processNumber: string

  @Field(() => Int, { description: 'process Year field (placeholder)' })
  processYear: number

  @Field(() => Int, { description: 'Example field (placeholder)' })
  modalityId: number

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
