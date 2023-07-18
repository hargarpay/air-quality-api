import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import CoordinatesDto from './dto/Coordinates.dto';
import { AirQualityService } from './air-quality.service';
import { AirQualityResponse } from './response/AirQuality.response';
import { MostPollutedResponse } from './response/MostPolluted.response';

@ApiTags('AirQuality')
@Controller({
  version: '1',
  path: '/air-quality',
})
export class AirQualityController {
  constructor(private readonly airQualityService: AirQualityService) {}

  @ApiResponse({
    status: 200,
    description: 'Get air quality by latitude and longitude',
    type: AirQualityResponse,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid latitude and longitude',
  })
  @ApiQuery({ name: 'latitude', type: 'number', required: true })
  @ApiQuery({ name: 'longitude', type: 'number', required: true })
  @Get('/')
  async getAirQuality(
    @Query() coordinates: CoordinatesDto,
  ): Promise<AirQualityResponse> {
    const result = await this.airQualityService.getAirQuality(coordinates);
    return new AirQualityResponse(result);
  }

  @ApiResponse({
    status: 200,
    description: 'Get paris most polluted datetime',
    type: AirQualityResponse,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid latitude and longitude',
  })
  @Get('most-polluted')
  async getMostPolluted(): Promise<MostPollutedResponse> {
    const result = await this.airQualityService.getMostPolluted();
    return new MostPollutedResponse(result);
  }
}
