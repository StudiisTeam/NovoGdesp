import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Modality {
  @Field(() => Int)
  id: number

  @Field(() => String)
  name: string;
}
