import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";

@InputType()
export class UpdatePriceRegistrationProtocolItemInput {
  @Field(() => ID)
  id: string
  
  @Field(()=> String)
  specification: string

  @Field(()=> String)
  observation:  string

  @Field(()=> String)
  brand: string

  @Field(()=> String)
  unity: string

  @Field(()=> Int)
  amount: number

  @Field(()=> Float)
  value: number

  @Field(()=> String)
  priceRegistrationProtocolId: string
}