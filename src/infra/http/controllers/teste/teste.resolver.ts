import { Get, UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { AuthorizationGuard } from '../../auth/authorization.guard';

@Resolver()
export class TesteResolver {
  constructor(
    private prisma: PrismaService
  ) { }
  @Query(() => String)
  @UseGuards(AuthorizationGuard)
  hello() {
    return "hello world"
  }
}
