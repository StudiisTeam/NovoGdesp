import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class CreateDepartmentInput {
  @Field()
  title: string

  @Field()
  accountable: string

  @Field()
  acronym: string

  @Field()
  color: string
}