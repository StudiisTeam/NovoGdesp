import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthorizationGuard } from '../../auth/authorization.guard';

@Controller('teste')
export class TesteController {
  @Get('ok')
  @UseGuards(AuthorizationGuard)
  hello() {
    return 'ok'
  }
}
