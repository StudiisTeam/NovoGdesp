import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class PriceRegistrationProtocolItem {
  @Field(()=> ID)
  id: string

  @Field(()=> String)
  specification: string

  @Field(()=> String)
  observation:  string

  @Field(()=> String)
  brand: string

  @Field(()=> String)
  unity: string

  @Field(()=> Number)
  amount: number

  @Field(()=> Number)
  value: number

  @Field(()=> String)
  priceRegistrationProtocolId: string
}