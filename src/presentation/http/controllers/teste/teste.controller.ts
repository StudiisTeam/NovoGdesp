import { Controller, Get, UseGuards } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { AuthorizationGuard } from '../../auth/authorization.guard';

@Controller('teste')
export class TesteController {
  constructor(
    private prisma: PrismaService
  ) { }
  @Get('ok')
  @UseGuards(AuthorizationGuard)
  hello() {
    return this.prisma.departaments.findMany();
  }
}
