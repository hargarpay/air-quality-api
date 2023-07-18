import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pollution } from '../common/schemas/pollution.schema';
import AirQualityDto from './dto/AirQuality.dto';
import MostPollutedDto from './dto/MostPolluted.dto';

@Injectable()
export class AirQualityRepository {
  constructor(
    @InjectModel(Pollution.name)
    private readonly pollutionModel: Model<Pollution>,
  ) {}
  async createPollution(airQuality: AirQualityDto): Promise<void> {
    await this.pollutionModel.create({
      createdAt: new Date(),
      ...airQuality.pollution,
    });
  }

  async getMostPolluted(): Promise<MostPollutedDto> {
    const [mostPollutedTDateTime] = await this.pollutionModel
      .find({})
      .sort({ aqius: -1, createdAt: -1 })
      .select('aqius ts createdAt')
      .limit(1);

    return mostPollutedTDateTime;
  }
}
