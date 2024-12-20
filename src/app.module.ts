import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth';
import { DatabaseModule } from './databases';
import { HealthModule } from './modules/health/health.module';

@Module({
  imports: [AuthModule, DatabaseModule, HealthModule],
})
export class AppModule {}
