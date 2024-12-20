import { Module } from '@nestjs/common';
import * as useCases from './application';

const applications = Object.values(useCases);
const controllers = applications.filter((x) => x.name.endsWith('Controller'));

@Module({
  controllers: [...controllers],
})
export class HealthModule {}
