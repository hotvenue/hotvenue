import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { validate } from 'class-validator';

import { Device } from './device.entity';
import { CreateDeviceDto } from './dto';

@Injectable()
export class DeviceService {
  constructor(
    @InjectRepository(Device) private readonly deviceRepository: Repository<Device>,
  ) {}

  async findAll(): Promise<Device[]> {
    return this.deviceRepository.find();
  }

  async findById(id): Promise<Device> {
    return this.deviceRepository.findOne(id);
  }

  async create(deviceData: CreateDeviceDto): Promise<Device> {
    const device = new Device();
    device.identifierForVendor = deviceData.identifierForVendor;
    device.name = deviceData.name;

    const errors = await validate(device);

    if (errors.length > 0) {
      throw new Error('Validation failed');
    }

    return this.deviceRepository.save(device);

  }
}
