import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHiredLegalPersonInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
