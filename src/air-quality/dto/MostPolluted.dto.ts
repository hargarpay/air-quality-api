import { IsNumber, IsNotEmpty, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export default class MostPollutedDto {
  @IsDate()
  @ApiProperty({
    description: 'The date of the app',
  })
  createdAt: Date;

  @IsDate()
  @ApiProperty({
    description: 'The date from the external api',
  })
  @Transform(({ value }) => new Date(value))
  ts: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  aqius: number;
}
