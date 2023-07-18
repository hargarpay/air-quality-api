import { Test, TestingModule } from '@nestjs/testing';
import {
  closeInMongodConnection,
  rootMongooseTestModule,
} from '../../test/util';
import { AirQualityController } from './air-quality.controller';
import { AirQualityModule } from './air-quality.module';
import { AirQualityResponse } from './response/AirQuality.response';
import { Model } from 'mongoose';
import { Pollution } from '../common/schemas/pollution.schema';
import { getModelToken } from '@nestjs/mongoose';
import { PollutionDto } from './dto/AirQuality.dto';
import MostPollutedDto from './dto/MostPolluted.dto';

describe('AirQualityController', () => {
  let controller: AirQualityController;
  let module: TestingModule;
  let model: Model<Pollution>;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [rootMongooseTestModule(), AirQualityModule],
    }).compile();

    controller = module.get<AirQualityController>(AirQualityController);
    model = module.get(getModelToken(Pollution.name));
  });

  describe('getAirQuality', () => {
    it('should return air quality for valid latitude and longitude', async () => {
      const coordinates = { latitude: 51.5074, longitude: -0.1278 };
      const result = await controller.getAirQuality(coordinates);
      expect(result).toBeInstanceOf(AirQualityResponse);
    });

    it('should throw an exception for invalid latitude and longitude', async () => {
      const coordinates = { latitude: 0, longitude: 0 };
      await expect(controller.getAirQuality(coordinates)).rejects.toThrow();
    });
  });

  describe('getMostPolluted', () => {
    it('should get most polluted date time', async () => {
      const currentTime = new Date();
      const currentDate = new Date(+currentTime + 30000);
      const pulluted1: PollutionDto | MostPollutedDto = {
        aqicn: 23,
        aqius: 56,
        maincn: 'p1',
        mainus: 'p1',
        createdAt: currentTime,
        ts: currentTime.toISOString(),
      };
      const pulluted2: PollutionDto | MostPollutedDto = {
        aqicn: 23,
        aqius: 78,
        maincn: 'p1',
        mainus: 'p1',
        createdAt: currentDate,
        ts: currentDate.toISOString(),
      };
      await model.insertMany([pulluted1, pulluted2]);
      const result = await controller.getMostPolluted();

      expect(result.result.ts).toBe(currentDate.toISOString());
    });
  });

  afterAll(async () => {
    await closeInMongodConnection();
    await module.close();
  });
});
