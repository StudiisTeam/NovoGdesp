import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class HiredPhysicalPerson {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  cpf: number;

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
