import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHiredLegalPersonInput {
  @Field(() => String)
  corporateName: string;

  @Field(() => String)
  cnpj: string;

  @Field(() => String)
  phone: string;

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

  @Field(() => Int)
  agencyBank: number;

  @Field(() => Int)
  codeBank: number;

  @Field(() => String)
  accountBank: string;
}
