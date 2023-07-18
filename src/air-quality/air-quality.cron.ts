import { Cron, CronExpression } from '@nestjs/schedule';
import { AirQualityService } from './air-quality.service';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AirQualityCron {
  private parisZoneLongitude = this.configService.get<number>(
    'PARIS_ZONE_LONGITUDE',
    2.352222,
  );
  private parisZoneLatitude = this.configService.get<number>(
    'PARIS_ZONE_LATITUDE',
    48.856613,
  );

  constructor(
    private readonly airQualityService: AirQualityService,
    private readonly configService: ConfigService,
  ) {}

  @Cron(CronExpression.EVERY_MINUTE)
  async scheduleParisPollution() {
    await this.airQualityService.savePollutionData({
      latitude: this.parisZoneLatitude,
      longitude: this.parisZoneLongitude,
    });
  }
}
