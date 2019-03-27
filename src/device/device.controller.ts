import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { DeviceService } from './device.service';
import { Device } from './device.entity';
import { CreateDeviceDto } from './dto';

@Controller('device')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @Get()
  async list(): Promise<Device[]> {
    return this.deviceService.findAll();
  }

  @Get(':id')
  async retrieve(@Param('id') id): Promise<Device> {
    return this.deviceService.findById(id);
  }

  @Post()
  async create(@Body('device') deviceData: CreateDeviceDto): Promise<Device> {
    return this.deviceService.create(deviceData);
  }
}
