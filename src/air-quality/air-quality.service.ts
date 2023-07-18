import { Injectable } from '@nestjs/common';
import { IqAirProvider } from '../common/providers/iqair.provider';
import CoordinatesDto from './dto/Coordinates.dto';
import { AirQualityRepository } from './air-quality.repository';
import AirQualityDto from './dto/AirQuality.dto';
import MostPollutedDto from './dto/MostPolluted.dto';

@Injectable()
export class AirQualityService {
  constructor(
    private readonly airQualityRepository: AirQualityRepository,
    private readonly iqAirProvider: IqAirProvider,
  ) {}

  private async getNearestCityByCoordinates(coordinates: CoordinatesDto) {
    return this.iqAirProvider.getNearestCityByCoordinates<AirQualityDto>({
      lon: coordinates.longitude,
      lat: coordinates.latitude,
    });
  }

  async getAirQuality(coordinates: CoordinatesDto) {
    return this.getNearestCityByCoordinates(coordinates);
  }

  async savePollutionData({ longitude, latitude }: CoordinatesDto) {
    const { pollution } = await this.getNearestCityByCoordinates({
      longitude,
      latitude,
    });

    await this.airQualityRepository.createPollution({
      pollution,
    });
  }

  async getMostPolluted(): Promise<MostPollutedDto> {
    return this.airQualityRepository.getMostPolluted();
  }
}
