import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateHiredLegalPersonInput } from './create-hired-legal-Person.input';

@InputType()
export class UpdateHiredLegalPersonInput extends PartialType(CreateHiredLegalPersonInput) {
  @Field(() => Int)
  id: number;
}
