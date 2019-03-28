import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DeviceController } from './device.controller';
import { DeviceService } from './device.service';
import { Device } from './device.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Device])],
  controllers: [DeviceController],
  providers: [DeviceService],
})
export class DeviceModule {}
