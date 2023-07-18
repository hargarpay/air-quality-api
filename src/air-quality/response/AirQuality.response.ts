import { ApiProperty } from '@nestjs/swagger';
import { BaseResponse } from '../../common/responses/BaseResponse';
import AirQualityDto from '../dto/AirQuality.dto';

export class AirQualityResponse extends BaseResponse<AirQualityDto> {
  @ApiProperty()
  result: AirQualityDto;
}
