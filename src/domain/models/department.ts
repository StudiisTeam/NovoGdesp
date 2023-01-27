import { Field, ID, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class Department {
  @Field(() => ID)
  id: string

  @Field()
  title: string

  @Field()
  accountable: string

  @Field()
  acronym: string

  @Field()
  color: string
  // BiddingProcessesOnDepartments
}