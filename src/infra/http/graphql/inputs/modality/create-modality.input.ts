import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateModalityInput {
  @Field(() => String)
  name: string;
}
