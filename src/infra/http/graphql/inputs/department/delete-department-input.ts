import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class DeleteDepartmentInput {
  @Field(() => String)
  id: string
}