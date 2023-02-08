import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class HiredLegalPerson {
  @Field(() => String, { description: 'Example field (placeholder)' })
  id: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  corporateName: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  cnpj: number;

  @Field(() => String, { description: 'Example field (placeholder)' })
  phone: number;

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

  @Field(() => String, { description: 'Example field (placeholder)' })
  agencyBank: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  codeBank: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  accountBank: string;
}
