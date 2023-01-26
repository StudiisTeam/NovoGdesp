import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateDepartmentInput {
  @Field()
  id: string

  @Field()
  title: string

  @Field()
  accountable: string

  @Field()
  acronym: string

  @Field()
  color: string
}