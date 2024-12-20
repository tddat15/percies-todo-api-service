import { Module } from '@nestjs/common';
import * as services from './services';

const Services = Object.values(services);
@Module({
  imports: [],
  exports: [...Services],
  providers: [...Services],
})
export class DatabaseModule {}
