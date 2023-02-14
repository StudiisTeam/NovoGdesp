import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class HiredLegalPerson {
  @Field(() => String)
  id: string;

  @Field(() => String)
  corporateName: string;

  @Field(() => String)
  cnpj: number;

  @Field(() => String)
  phone: number;

  @Field(() => String)
  email: string;

  @Field(() => String)
  address: string;

  @Field(() => String)
  color: string;

  @Field(() => String)
  acronym: string;

  @Field(() => String)
  nameBank: string;

  @Field(() => String)
  agencyBank: string;

  @Field(() => String)
  codeBank: string;

  @Field(() => String)
  accountBank: string;
}
