import * as useCases from './application';
import * as services from './service';
import { DatabaseModule } from '../../databases';
import { Module } from '@nestjs/common';

const applications = Object.values(useCases);
const controllers = applications.filter((x) => x.name.endsWith('Controller'));
const handlers = applications.filter((x) => x.name.endsWith('Handler'));
const Services = [...Object.values(services)];
@Module({
  imports: [DatabaseModule],
  controllers: [...controllers],
  providers: [...handlers, ...Services],
  exports: [...Services],
})
export class AuthModule {}
