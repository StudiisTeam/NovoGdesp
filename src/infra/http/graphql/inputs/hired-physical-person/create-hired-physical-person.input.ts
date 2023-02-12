import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHiredPhysicalPersonInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  cpf: string;

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
