import { ApiTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';

@ApiTags('Health')
@Controller({
  path: 'healthCheck',
  version: 'v1',
})
export class HealthCheckController {
  @Get()
  get(): boolean {
    return true;
  }
}
