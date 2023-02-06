import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class HiredLegalPerson {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
