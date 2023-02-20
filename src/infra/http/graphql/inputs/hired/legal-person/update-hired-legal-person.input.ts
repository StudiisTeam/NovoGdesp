import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateHiredLegalPersonInput } from './create-hired-legal-person.input';

@InputType()
export class UpdateHiredLegalPersonInput extends PartialType(CreateHiredLegalPersonInput) {
  @Field(() => String, { description: 'Example field (placeholder)' })
  id: string;

  @Field(() => String, { nullable: true })
  corporateName?: string;

  @Field(() => String, { nullable: true })
  cnpj: string;

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
