import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHiredInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
