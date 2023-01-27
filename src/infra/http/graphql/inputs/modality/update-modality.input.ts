import { CreateModalityInput } from './create-modality.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateModalityInput extends PartialType(CreateModalityInput) {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;
}
