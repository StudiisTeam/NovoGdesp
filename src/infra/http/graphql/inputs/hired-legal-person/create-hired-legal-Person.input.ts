import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHiredLegalPersonInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  corporateName: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  cnpj: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  phone: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  email: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  address: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  color: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  acronym: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  nameBank: string;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  agencyBank: number;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  codeBank: number;

  @Field(() => String, { description: 'Example field (placeholder)' })
  accountBank: string;
}
