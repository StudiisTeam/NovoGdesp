import { Field, Float, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreatePriceRegistrationProtocolItemInput {
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