import { CreateHiredInput } from './create-hired.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHiredInput extends PartialType(CreateHiredInput) {
  @Field(() => Int)
  id: number;
}
