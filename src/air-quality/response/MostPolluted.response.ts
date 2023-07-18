import { ApiProperty } from '@nestjs/swagger';
import MostPollutedDto from '../dto/MostPolluted.dto';
import { BaseResponse } from '../../common/responses/BaseResponse';

export class MostPollutedResponse extends BaseResponse<MostPollutedDto> {
  @ApiProperty()
  result: MostPollutedDto;
}
