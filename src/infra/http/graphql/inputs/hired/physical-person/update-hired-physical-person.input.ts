import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateHiredPhysicalPersonInput } from './create-hired-physical-person.input';

@InputType()
export class UpdateHiredPhysicalPersonInput extends PartialType(CreateHiredPhysicalPersonInput) {
  @Field(() => String, { description: 'Example field (placeholder)' })
  id: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  cpf: string;

  @Field(() => String, { nullable: true })
  phone: string;

  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => String, { nullable: true })
  address: string;

  @Field(() => String, { nullable: true })
  color: string;

  @Field(() => String, { nullable: true })
  acronym: string;

  @Field(() => String, { nullable: true })
  nameBank: string;

  @Field(() => Int, { nullable: true })
  agencyBank: number;

  @Field(() => Int, { nullable: true })
  codeBank: number;

  @Field(() => String, { nullable: true })
  accountBank: string;
}
