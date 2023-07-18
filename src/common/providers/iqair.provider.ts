import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';
import ApiCoordinatesParamsDto from './dto/ApiCoordinatesParams.dto';

@Injectable()
export class IqAirProvider {
  private iqAirApiKey = this.configService.get('IQAIR_API_KEY');
  private iqAirBaseUrl = this.configService.get('IQAIR_BASEURL');
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  private async iqAirGetApi<T>(relativeUrl: string, coordinates: T) {
    const iqAirApi = `${this.iqAirBaseUrl}${relativeUrl}`;

    try {
      const response = this.httpService.get(iqAirApi, {
        params: {
          key: this.iqAirApiKey,
          ...coordinates,
        },
      });

      const result = await lastValueFrom(response);

      return result.data.data.current;
    } catch (e) {
      if (e.response.status === 400) {
        throw new HttpException('Invalid Coordinates', HttpStatus.BAD_REQUEST);
      }
      throw new HttpException(
        'Service Not Available',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }

  async getNearestCityByCoordinates<T>(coordinates: ApiCoordinatesParamsDto) {
    const result = await this.iqAirGetApi<ApiCoordinatesParamsDto>(
      '/v2/nearest_city',
      coordinates,
    );
    return { pollution: result.pollution } as T;
  }
}
